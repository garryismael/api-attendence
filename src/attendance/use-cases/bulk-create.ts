import { AttendanceDate } from '@/attendance-date/attendance-date.entity';
import { AttendanceDateService } from '@/attendance-date/attendance-date.service';
import { DepartmentService } from '@/departments/departments.service';
import { Employee } from '@/employee/employee.entity';
import { EmployeeService } from '@/employee/employee.service';
import { parseToDate } from '@/utils';
import { Injectable } from '@nestjs/common';
import { BulkAttendanceRequestDTO } from '../attendance.dto';
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
        let employee = new Employee();
        employee.id = item.id;
        employee.firstName = item.firstName;
        employee.lastName = item.lastName;
        employee.department = departments[index];
        employee = await this.employeeService.save(employee);
        return employee;
      }),
    );

    const attendancesDates = await Promise.all(
      request.attendances.map(async (item) => {
        let attendanceDate = new AttendanceDate();
        attendanceDate.date = parseToDate(item.date);
        attendanceDate = await this.attendanceDateService.save(attendanceDate);
        return attendanceDate;
      }),
    );

    const attendances = await Promise.all(
      request.attendances.map(async (item, index) => {
        let attendance = new Attendance();
        attendance.date = attendancesDates[index];
        attendance.present = item.present;
        attendance.employee = await this.employeeService.findOneById(
          item.employeeId,
        );
        attendance = await this.attendanceService.save(attendance);
        return attendance;
      }),
    );

    return attendances;
  }
}
