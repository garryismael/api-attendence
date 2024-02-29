import { Injectable, NotFoundException } from '@nestjs/common';
import { AttendanceService } from '../attendance.service';

@Injectable()
export class DeleteAttendanceUseCase {
  constructor(private attendanceService: AttendanceService) {}

  async execute(id: number) {
    const attendance = await this.attendanceService.findOneById(id);
    if (!attendance) {
      throw new NotFoundException('Attendance Not Found');
    }
    return this.attendanceService.deleteById(id);
  }
}
