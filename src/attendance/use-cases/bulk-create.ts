import { Injectable } from '@nestjs/common';
import { BulkAttendanceRequestDTO } from '../attendance.dto';

@Injectable()
export class BulkCreateAttendanceUseCase {
  constructor() {}

  async execute(request: BulkAttendanceRequestDTO) {}
}
