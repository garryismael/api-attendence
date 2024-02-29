import { Body, Controller, Post } from '@nestjs/common';
import { BulkCreateAttendanceUseCase } from './use-cases/bulk-create';
import { BulkAttendanceRequestDTO } from './attendance.dto';

@Controller('attendances')
export class AttendanceController {
  constructor(
    private readonly bulkCreateUseCase: BulkCreateAttendanceUseCase,
  ) {}

  @Post('bulk-create')
  bulkSave(@Body() request: BulkAttendanceRequestDTO) {
    return this.bulkCreateUseCase.execute(request);
  }
}
