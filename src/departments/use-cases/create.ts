import { Injectable } from '@nestjs/common';
import { DepartmentService } from '../departments.service';
import { DepartmentRequestDTO } from '../department.dto';
import { Department } from '../department.entity';

@Injectable()
export class CreateDepartmentsUseCase {
  constructor(private readonly departmentService: DepartmentService) {}
  execute(request: DepartmentRequestDTO) {
    const department = new Department();
    department.name = request.name;
    return this.departmentService.save(department);
  }
}
