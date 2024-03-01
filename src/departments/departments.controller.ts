import { Controller, Get } from '@nestjs/common';
import { FindDepartmentsUseCase } from './use-cases/find-all';

@Controller('departments')
export class DepartmentsController {
  constructor(private findUseCase: FindDepartmentsUseCase) {}

  @Get()
  findAll() {
    return this.findUseCase.execute();
  }
}
