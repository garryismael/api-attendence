import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private repository: Repository<Employee>,
  ) {}

  async findAll() {
    return this.repository.find();
  }

  async findOneById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  async save(employee: Employee) {
    return await this.repository.save(employee);
  }

  async deleteById(id: number) {
    await this.repository.softDelete({
      id,
    });
  }
}
