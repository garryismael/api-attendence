import { Module } from '@nestjs/common';
import { DepartmentService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FindDepartmentsUseCase } from './use-cases/find-all';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  exports: [DepartmentService],
  providers: [DepartmentService, FindDepartmentsUseCase],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
