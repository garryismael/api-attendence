import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { DepartmentsModule } from '@/departments/departments.module';
import { EmployeeModule } from '@/employee/employee.module';
import { AttendanceDateModule } from '@/attendance-date/attendance-date.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendance } from './attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendance]),
    DepartmentsModule,
    EmployeeModule,
    AttendanceDateModule,
  ],
  providers: [AttendanceService],
  controllers: [AttendanceController],
})
export class AttendanceModule {}
