import { Injectable } from '@nestjs/common';
import { DepartmentService } from '../departments.service';

@Injectable()
export class FindDepartmentsUseCase {
  constructor(private readonly departmentService: DepartmentService) {}
  execute() {
    return this.departmentService.findAll();
  }
}
