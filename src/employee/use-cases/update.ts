import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeService } from '../employee.service';
import { EmployeeRequestDTO } from '../employee.dto';

@Injectable()
export class UpdateEmployeeUseCase {
  constructor(private readonly employeeService: EmployeeService) {}
  async execute(id: number, request: EmployeeRequestDTO) {
    const employee = await this.employeeService.findOneById(id);
    if (!employee) {
      throw new NotFoundException('Employee Not Found');
    }
    employee.firstName = request.firstName;
    employee.lastName = request.lastName;
    return this.employeeService.save(employee);
  }
}
