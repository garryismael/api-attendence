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

  async findOneById(id: number) {
    return this.repository.findOne({
      where: {
        id,
      },
      relations: ['employee', 'employee.department', 'date'],
    });
  }

  async findAll() {
    return this.repository.find({
      relations: ['employee', 'employee.department', 'date'],
    });
  }

  async bulkSave(attendances: Attendance[]) {
    return this.repository.save(attendances);
  }

  async deleteById(id: number) {
    return this.repository.softDelete({
      id,
    });
  }
}
