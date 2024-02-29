import { AttendanceDate } from '@/attendance-date/attendance-date.entity';
import { Attendance } from '@/attendance/attendance.entity';
import config from '@/config';
import { Department } from '@/departments/department.entity';
import { Employee } from '@/employee/employee.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        ...config().database,
        entities: [Department, Employee, AttendanceDate, Attendance],
      }),
    }),
    TypeOrmModule.forFeature([
      Department,
      Employee,
      AttendanceDate,
      Attendance,
    ]),
  ],
})
export class DbModule {}
