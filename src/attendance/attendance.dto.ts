import { ApiProperty } from '@nestjs/swagger';

export class AttendanceEmployeeRequestDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  department: string;
}

export class AttendanceDateEmployeeRequestDTO {
  @ApiProperty()
  employeeId: number;
  @ApiProperty()
  date: string;
  @ApiProperty()
  present: boolean;
}

export class BulkAttendanceRequestDTO {
  @ApiProperty({
    type: Array<AttendanceEmployeeRequestDTO>,
  })
  employees: Array<AttendanceEmployeeRequestDTO>;
  @ApiProperty({
    type: Array<AttendanceDateEmployeeRequestDTO>,
  })
  attendances: Array<AttendanceDateEmployeeRequestDTO>;
}

export class AttendanceRequestDTO {
  @ApiProperty()
  employeeId: number;
  @ApiProperty()
  date: string;
  @ApiProperty()
  present: boolean;
}

export class AttendanceResponseDTO {}
