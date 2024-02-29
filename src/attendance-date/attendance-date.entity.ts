import { Attendance } from '@/attendance/attendance.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'AttendanceDate' })
export class AttendanceDate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp without time zone' })
  date: Date;

  @OneToMany(() => Attendance, (attendance) => attendance.date)
  attendances: Attendance[];
}
