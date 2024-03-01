import { Controller, Get, Param } from '@nestjs/common';
import { FindDepartmentsUseCase } from './use-cases/find-all';
import { FindOneDepartmentUseCase } from './use-cases/find-one';

@Controller('departments')
export class DepartmentsController {
  constructor(
    private findUseCase: FindDepartmentsUseCase,
    private readonly findOneUseCase: FindOneDepartmentUseCase,
  ) {}

  @Get()
  findAll() {
    return this.findUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneUseCase.execute(id);
  }
}
