import { AttendanceDate } from '@/attendance-date/attendance-date.entity';
import { AttendanceDateService } from '@/attendance-date/attendance-date.service';
import { EmployeeService } from '@/employee/employee.service';
import { parseToDate } from '@/utils';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AttendanceRequestDTO } from '../attendance.dto';
import { Attendance } from '../attendance.entity';
import { AttendanceService } from '../attendance.service';

@Injectable()
export class CreateAttendanceUseCase {
  constructor(
    private attendanceService: AttendanceService,
    private employeeService: EmployeeService,
    private attendanceDateService: AttendanceDateService,
  ) {}

  async execute(request: AttendanceRequestDTO) {
    const employee = await this.employeeService.findOneById(request.employeeId);
    let attendanceDate = new AttendanceDate();
    const attendance = new Attendance();

    if (!employee) {
      throw new NotFoundException('Employee Not Found');
    }

    attendanceDate.date = parseToDate(request.date);
    attendanceDate = await this.attendanceDateService.save(attendanceDate);

    attendance.date = attendanceDate;
    attendance.present = request.present;
    attendance.employee = employee;
    return await this.attendanceService.save(attendance);
  }
}
