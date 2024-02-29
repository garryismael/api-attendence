import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeRequestDTO } from './employee.dto';
import { CreateEmployeeUseCase } from './use-cases/create';

@Controller('employees')
export class EmployeeController {
  constructor(private createUseCase: CreateEmployeeUseCase) {}
  @Post()
  async create(@Body() request: EmployeeRequestDTO) {
    return await this.createUseCase.execute(request);
  }
}
