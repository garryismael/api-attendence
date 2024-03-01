import { ApiProperty } from '@nestjs/swagger';

export class DepartmentRequestDTO {
  @ApiProperty()
  name: string;
}
