import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceDate } from './attendance-date.entity';
import { AttendanceDateService } from './attendance-date.service';

@Module({
  imports: [TypeOrmModule.forFeature([AttendanceDate])],
  providers: [AttendanceDateService],
  exports: [AttendanceDateService],
})
export class AttendanceDateModule {}
