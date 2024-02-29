import { AttendanceDate } from '@/attendance-date/attendance-date.entity';
import { AttendanceDateService } from '@/attendance-date/attendance-date.service';
import { Department } from '@/departments/department.entity';
import { DepartmentService } from '@/departments/departments.service';
import { Employee } from '@/employee/employee.entity';
import { EmployeeService } from '@/employee/employee.service';
import { parseToDate } from '@/utils';
import { Injectable } from '@nestjs/common';
import {
  AttendanceDateEmployeeRequestDTO,
  AttendanceEmployeeRequestDTO,
  BulkAttendanceRequestDTO,
} from '../attendance.dto';
import { Attendance } from '../attendance.entity';
import { AttendanceService } from '../attendance.service';

@Injectable()
export class BulkCreateAttendanceUseCase {
  constructor(
    private attendanceService: AttendanceService,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private attendanceDateService: AttendanceDateService,
  ) {}

  async execute(request: BulkAttendanceRequestDTO) {
    const departments = await Promise.all(
      request.employees.map(async (item) => {
        return await this.departmentService.findOrCreateByName(item.department);
      }),
    );

    await Promise.all(
      request.employees.map(async (item, index) => {
        return await this.createEmployee(item, departments, index);
      }),
    );
    const attendancesDates = await Promise.all(
      request.attendances.map(async (item) => {
        return await this.createAttendanceDate(item);
      }),
    );
    // TODO: Check If Employee is not null
    return await Promise.all(
      request.attendances.map(async (item, index) => {
        return await this.createAttendance(attendancesDates, index, item);
      }),
    );
  }

  private async createAttendance(
    attendancesDates: AttendanceDate[],
    index: number,
    item: AttendanceDateEmployeeRequestDTO,
  ) {
    const attendance = new Attendance();
    attendance.date = attendancesDates[index];
    attendance.present = item.present;
    attendance.employee = await this.employeeService.findOneById(
      item.employeeId,
    );
    return await this.attendanceService.save(attendance);
  }

  private async createAttendanceDate(item: AttendanceDateEmployeeRequestDTO) {
    const attendanceDate = new AttendanceDate();
    attendanceDate.date = parseToDate(item.date);
    return await this.attendanceDateService.save(attendanceDate);
  }

  private async createEmployee(
    item: AttendanceEmployeeRequestDTO,
    departments: Department[],
    index: number,
  ) {
    const employee = new Employee();
    employee.id = item.id;
    employee.firstName = item.firstName;
    employee.lastName = item.lastName;
    employee.department = departments[index];
    return await this.employeeService.save(employee);
  }
}
