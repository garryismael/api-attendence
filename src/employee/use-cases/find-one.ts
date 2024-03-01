import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeService } from '../employee.service';

@Injectable()
export class FindOneEmployeeUseCase {
  constructor(private readonly employeeService: EmployeeService) {}
  async execute(id: number) {
    const employee = await this.employeeService.findOneById(id);
    if (!employee) {
      throw new NotFoundException('Employee Not Found');
    }
    return employee;
  }
}
