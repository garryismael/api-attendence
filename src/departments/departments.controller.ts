import { Controller, Get, Param, Post } from '@nestjs/common';
import { FindDepartmentsUseCase } from './use-cases/find-all';
import { FindOneDepartmentUseCase } from './use-cases/find-one';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentRequestDTO } from './department.dto';
import { CreateDepartmentsUseCase } from './use-cases/create';

@Controller('departments')
@ApiTags('Departments')
export class DepartmentsController {
  constructor(
    private readonly findUseCase: FindDepartmentsUseCase,
    private readonly findOneUseCase: FindOneDepartmentUseCase,
    private readonly createUseCase: CreateDepartmentsUseCase,
  ) {}

  @Post()
  create(request: DepartmentRequestDTO) {
    return this.createUseCase.execute(request);
  }
  @Get()
  findAll() {
    return this.findUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneUseCase.execute(id);
  }
}
