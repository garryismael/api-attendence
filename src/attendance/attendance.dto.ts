export class AttendanceEmployeeRequestDTO {
  id: number;
  firstName: string;
  lastName: string;
}

export class AttendanceDateEmployeeRequestDTO {
  employeeId: number;
  date: string;
  present: boolean;
}

export class BulkAttendanceRequestDTO {
  employees: Array<AttendanceEmployeeRequestDTO>;
  attendances: Array<AttendanceDateEmployeeRequestDTO>;
}

export class AttendanceResponseDTO {}
