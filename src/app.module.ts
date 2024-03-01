import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AttendanceDateModule } from './attendance-date/attendance-date.module';
import { AttendanceModule } from './attendance/attendance.module';
import config from './config';
import { DbModule } from './db/db.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    DbModule,
    DepartmentsModule,
    EmployeeModule,
    AttendanceModule,
    AttendanceDateModule,
  ],
  providers: [AppService],
})
export class AppModule {}
