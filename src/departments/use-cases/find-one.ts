import { Injectable, NotFoundException } from '@nestjs/common';
import { DepartmentService } from '../departments.service';

@Injectable()
export class FindOneDepartmentUseCase {
  constructor(private readonly departmentService: DepartmentService) {}
  async execute(id: number) {
    const department = await this.departmentService.findOneById(id);
    if (!department) {
      throw new NotFoundException('Department Not Found');
    }
    return department;
  }
}
