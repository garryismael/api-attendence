import { Injectable } from '@nestjs/common';
import { EmployeeService } from '../employee.service';

@Injectable()
export class FindAllEmployeeUseCase {
  constructor(private readonly employeeService: EmployeeService) {}
  execute() {
    return this.employeeService.findAll();
  }
}
