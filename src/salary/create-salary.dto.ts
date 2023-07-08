import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateSalaryDto {
  @IsString() name: string;
  @IsInt() salary: number;
  @IsString() department: string;
  @IsString() sub_department: string;
  @IsString() currency: string;
  @IsBoolean() on_contract: boolean;
}
