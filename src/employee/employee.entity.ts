import { Attendance } from '@/attendance/attendance.entity';
import { Department } from '@/departments/department.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Employee' })
export class Employee {
  @PrimaryGeneratedColumn('identity', {
    name: 'id',
    generatedIdentity: 'BY DEFAULT',
  })
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinTable({
    name: 'departmentId',
  })
  department: Department;

  @OneToMany(() => Attendance, (attendance) => attendance.employee)
  attendances: Attendance[];
}
