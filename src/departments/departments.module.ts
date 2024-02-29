import { Module } from '@nestjs/common';
import { DepartmentService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { Department } from './department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  exports: [DepartmentService],
  providers: [DepartmentService],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
