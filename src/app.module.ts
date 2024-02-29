import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { DbModule } from './db/db.module';
import { EmployeeModule } from './employee/employee.module';
import { AttendanceModule } from './attendance/attendance.module';
import { DepartmentsModule } from './departments/departments.module';
import { AttendanceDateModule } from './attendance-date/attendance-date.module';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
