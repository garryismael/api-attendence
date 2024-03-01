import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeRequestDTO } from './employee.dto';
import { CreateEmployeeUseCase } from './use-cases/create';
import { DeleteEmployeeUseCase } from './use-cases/delete';
import { FindAllEmployeeUseCase } from './use-cases/find';
import { FindOneEmployeeUseCase } from './use-cases/find-one';
import { UpdateEmployeeUseCase } from './use-cases/update';
import { ApiTags } from '@nestjs/swagger';

@Controller('employees')
@ApiTags('Employees')
export class EmployeeController {
  constructor(
    private createUseCase: CreateEmployeeUseCase,
    private deleteUseCase: DeleteEmployeeUseCase,
    private findOneUseCase: FindOneEmployeeUseCase,
    private findUseCase: FindAllEmployeeUseCase,
    private updateUseCase: UpdateEmployeeUseCase,
  ) {}

  @Post()
  create(@Body() request: EmployeeRequestDTO) {
    return this.createUseCase.execute(request);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.deleteUseCase.execute(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findOneUseCase.execute(id);
  }

  @Get()
  findAll() {
    return this.findUseCase.execute();
  }

  @Put(':id')
  update(@Param('id') id: number, request: EmployeeRequestDTO) {
    return this.updateUseCase.execute(id, request);
  }
}
