import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceDate } from './attendance-date.entity';

@Injectable()
export class AttendanceDateService {
  constructor(
    @InjectRepository(AttendanceDate)
    private repository: Repository<AttendanceDate>,
  ) {}

  async save(attendanceDate: AttendanceDate) {
    return this.repository.save(attendanceDate);
  }
}
