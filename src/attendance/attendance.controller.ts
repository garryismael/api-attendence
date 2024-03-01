import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BulkCreateAttendanceUseCase } from './use-cases/bulk-create';
import {
  AttendanceRequestDTO,
  BulkAttendanceRequestDTO,
} from './attendance.dto';
import { FindAllAttendanceUseCase } from './use-cases/find-all';
import { DeleteAttendanceUseCase } from './use-cases/delete';
import { FindOneAttendanceUseCase } from './use-cases/find-one';
import { CreateAttendanceUseCase } from './use-cases/create';

@Controller('attendances')
export class AttendanceController {
  constructor(
    private readonly bulkCreateUseCase: BulkCreateAttendanceUseCase,
    private readonly findAllUseCase: FindAllAttendanceUseCase,
    private readonly deleteUseCase: DeleteAttendanceUseCase,
    private readonly findOneUseCase: FindOneAttendanceUseCase,
    private readonly createUseCase: CreateAttendanceUseCase,
  ) {}

  @Post()
  create(@Body() request: AttendanceRequestDTO) {
    return this.createUseCase.execute(request);
  }

  @Get()
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneUseCase.execute(id);
  }

  @Post('bulk-create')
  bulkSave(@Body() request: BulkAttendanceRequestDTO) {
    return this.bulkCreateUseCase.execute(request);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.deleteUseCase.execute(id);
  }
}
