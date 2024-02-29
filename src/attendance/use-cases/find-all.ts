import { Injectable } from '@nestjs/common';
import { AttendanceService } from '../attendance.service';

@Injectable()
export class FindAllAttendanceUseCase {
  constructor(private attendanceService: AttendanceService) {}

  execute() {
    return this.attendanceService.findAll();
  }
}
