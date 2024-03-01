import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeUseCase } from './use-cases/create';
import { DeleteEmployeeUseCase } from './use-cases/delete';
import { FindOneEmployeeUseCase } from './use-cases/find-one';
import { FindAllEmployeeUseCase } from './use-cases/find';
import { UpdateEmployeeUseCase } from './use-cases/update';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [
    EmployeeService,
    CreateEmployeeUseCase,
    DeleteEmployeeUseCase,
    FindOneEmployeeUseCase,
    FindAllEmployeeUseCase,
    UpdateEmployeeUseCase,
  ],
  exports: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
