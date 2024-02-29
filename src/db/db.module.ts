import config from '@/config';
import { Employee } from '@/employee/employee.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        ...config().database,
        entities: [Employee],
      }),
    }),
  ],
})
export class DbModule {}
