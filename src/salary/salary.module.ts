import { Module } from '@nestjs/common';
import { SalaryController } from './salary.controller';
import { SalaryService } from './salary.service';
import { SalaryProviders } from './salary.provider';
import { DatabaseModule } from '../db/db.module';
@Module({
  imports: [DatabaseModule],
  controllers: [SalaryController],
  providers: [
      SalaryService,
      ...SalaryProviders,
    ],
})
export class SalaryModule {}
