import { AttendanceDate } from '@/attendance-date/attendance-date.entity';
import { Employee } from '@/employee/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'AttendanceEmployee ' })
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  present: boolean;

  @ManyToOne(() => Employee, (employee) => employee.attendances)
  @JoinTable({
    name: 'employeeId',
  })
  employee: Employee;

  @ManyToOne(
    () => AttendanceDate,
    (attendanceDate) => attendanceDate.attendances,
  )
  @JoinTable({
    name: 'attendanceDateId',
  })
  date: AttendanceDate;
}
