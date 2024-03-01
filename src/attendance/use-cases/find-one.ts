import { Injectable } from '@nestjs/common';
import { AttendanceService } from '../attendance.service';

@Injectable()
export class FindOneAttendanceUseCase {
  constructor(private attendanceService: AttendanceService) {}

  execute(id: number) {
    return this.attendanceService.findOneById(id);
  }
}
