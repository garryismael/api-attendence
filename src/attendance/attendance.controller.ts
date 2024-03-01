import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BulkCreateAttendanceUseCase } from './use-cases/bulk-create';
import {
  AttendanceRequestDTO,
  BulkAttendanceRequestDTO,
} from './attendance.dto';
import { FindAllAttendanceUseCase } from './use-cases/find-all';
import { DeleteAttendanceUseCase } from './use-cases/delete';
import { FindOneAttendanceUseCase } from './use-cases/find-one';
import { CreateAttendanceUseCase } from './use-cases/create';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Attendance } from './attendance.entity';

@Controller('attendances')
@ApiTags('Attendances')
export class AttendanceController {
  constructor(
    private readonly bulkCreateUseCase: BulkCreateAttendanceUseCase,
    private readonly findAllUseCase: FindAllAttendanceUseCase,
    private readonly deleteUseCase: DeleteAttendanceUseCase,
    private readonly findOneUseCase: FindOneAttendanceUseCase,
    private readonly createUseCase: CreateAttendanceUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  @ApiOkResponse({
    type: Attendance,
    status: HttpStatus.CREATED,
  })
  create(@Body() request: AttendanceRequestDTO) {
    return this.createUseCase.execute(request);
  }

  @Get()
  @ApiOkResponse({
    type: Array<Attendance>,
  })
  findAll() {
    return this.findAllUseCase.execute();
  }

  @Get(':id')
  @ApiOkResponse({
    type: Attendance,
  })
  findOne(@Param('id') id: number) {
    return this.findOneUseCase.execute(id);
  }

  @Post('bulk-create')
  @HttpCode(201)
  @ApiOkResponse({
    type: Attendance,
    status: HttpStatus.CREATED,
  })
  bulkSave(@Body() request: BulkAttendanceRequestDTO) {
    return this.bulkCreateUseCase.execute(request);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.deleteUseCase.execute(id);
  }
}
