import { AttendanceDateModule } from '@/attendance-date/attendance-date.module';
import { DepartmentsModule } from '@/departments/departments.module';
import { EmployeeModule } from '@/employee/employee.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceController } from './attendance.controller';
import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';
import { BulkCreateAttendanceUseCase } from './use-cases/bulk-create';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendance]),
    DepartmentsModule,
    EmployeeModule,
    AttendanceDateModule,
  ],
  providers: [AttendanceService, BulkCreateAttendanceUseCase],
  controllers: [AttendanceController],
})
export class AttendanceModule {}
