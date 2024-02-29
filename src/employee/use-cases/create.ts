import { Injectable } from '@nestjs/common';
import { EmployeeRequestDTO, EmployeeResponseDTO } from '../employee.dto';
import { Employee } from '../employee.entity';
import { EmployeeService } from '../employee.service';

@Injectable()
export class CreateEmployeeUseCase {
  constructor(private readonly employeeService: EmployeeService) {}

  async execute(request: EmployeeRequestDTO): Promise<EmployeeResponseDTO> {
    let employee = new Employee();
    employee.firstName = request.firstName;
    employee.lastName = request.lastName;
    employee = await this.employeeService.save(employee);

    return new EmployeeResponseDTO(
      employee.id,
      employee.firstName,
      employee.lastName,
    );
  }
}
