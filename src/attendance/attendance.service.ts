import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private repository: Repository<Attendance>,
  ) {}

  async save(attendance: Attendance) {
    return this.repository.save(attendance);
  }

  async bulkSave(attendances: Attendance[]) {
    return this.repository.save(attendances);
  }
}
