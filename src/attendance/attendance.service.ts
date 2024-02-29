import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';
import { DepartmentService } from '@/departments/departments.service';
import { EmployeeService } from '@/employee/employee.service';
import { AttendanceDateService } from '@/attendance-date/attendance-date.service';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private repository: Repository<Attendance>,
    private departmentService: DepartmentService,
    private employeeService: EmployeeService,
    private attendanceDateService: AttendanceDateService,
  ) {}
}
