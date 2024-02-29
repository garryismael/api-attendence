import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BulkCreateAttendanceUseCase } from './use-cases/bulk-create';
import { BulkAttendanceRequestDTO } from './attendance.dto';
import { FindAllAttendanceUseCase } from './use-cases/find-all';
import { DeleteAttendanceUseCase } from './use-cases/delete';

@Controller('attendances')
export class AttendanceController {
  constructor(
    private readonly bulkCreateUseCase: BulkCreateAttendanceUseCase,
    private readonly findAllUseCase: FindAllAttendanceUseCase,
    private readonly deleteUseCase: DeleteAttendanceUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Post('bulk-create')
  bulkSave(@Body() request: BulkAttendanceRequestDTO) {
    return this.bulkCreateUseCase.execute(request);
  }

  @Delete()
  delete(id: number) {
    return this.deleteUseCase.execute(id);
  }
}
