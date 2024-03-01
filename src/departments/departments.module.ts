import { Module } from '@nestjs/common';
import { DepartmentService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindDepartmentsUseCase } from './use-cases/find-all';
import { FindOneDepartmentUseCase } from './use-cases/find-one';
import { CreateDepartmentsUseCase } from './use-cases/create';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  exports: [DepartmentService],
  providers: [
    DepartmentService,
    FindDepartmentsUseCase,
    FindOneDepartmentUseCase,
    CreateDepartmentsUseCase,
  ],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
