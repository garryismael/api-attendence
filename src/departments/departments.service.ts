import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Department } from './department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private repository: Repository<Department>,
  ) {}

  async findOrCreateByName(name: string) {
    let department = await this.findOneByName(name);
    if (!department) {
      department = new Department();
      department.name = name;
      return await this.save(department);
    }
    return department;
  }

  async findOneByName(name: string) {
    return await this.repository.findOne({
      where: {
        name,
      },
    });
  }

  async findAll() {
    return await this.repository.find();
  }

  async save(department: Department) {
    return await this.repository.save(department);
  }

  findOneById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  async deleteById(id: number) {
    return await this.repository.softDelete({ id });
  }
}
