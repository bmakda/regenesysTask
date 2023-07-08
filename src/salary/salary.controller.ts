import { AuthGuard } from '@nestjs/passport';
import {
  Get,
  Post,
  Body,
  Controller,
  UsePipes,
  Delete,
  Param,
  Put,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { CreateSalaryDto } from './create-salary.dto';
import { SalaryService } from './salary.service';
import { Salary } from './salary.interface';
import { ValidationPipe } from '../common/validation.pipe';

@Controller('Salary')
export class SalaryController {

  constructor(private readonly salaryService: SalaryService) { }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll() {
    const data = await this.salaryService.findAll();
    return { status: HttpStatus.OK, data };
  }

  @Get('analytics_yearly')
  @UseGuards(AuthGuard('jwt'))
  async findAnalyticsYearly() {
    const data = await this.salaryService.getAnalytics();
    return { status: HttpStatus.OK, data };
  }

  @Get('analytics_contract')
  @UseGuards(AuthGuard('jwt'))
  async findAnalyticsContract() {
    const data = await this.salaryService.getAnalytics(null, true);
    return { status: HttpStatus.OK, data };
  }

  @Get('analytics_department')
  @UseGuards(AuthGuard('jwt'))
  async findAnalyticsDepartment() {
    const data = await this.salaryService.getAnalytics("$department");
    return { status: HttpStatus.OK, data };
  }

  @Get('analytics_sub_department')
  @UseGuards(AuthGuard('jwt'))
  async findAnalyticsSubDepartment() {
    const data = await this.salaryService.getAnalyticsSubDep();
    return { status: HttpStatus.OK, data };
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async findOne(@Param('id') id) {
    const data = await this.salaryService.findOne(id);

    let status = HttpStatus.OK;
    if (!data) status = HttpStatus.NOT_FOUND;
    return { status, data };
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async create(@Body() createSalaryDto: CreateSalaryDto) {
    const data = await this.salaryService.create(createSalaryDto);
    return { status: HttpStatus.CREATED, data };
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  async deleteSalary(@Param('id') id) {
    const data = await this.salaryService.delete(id);
    let status = HttpStatus.OK;
    if (!data) status = HttpStatus.NOT_FOUND;
    return { status, data };
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async updateSalary(@Param('id') id, @Body() createSalaryDto: CreateSalaryDto) {
    const data = await this.salaryService.updateSalary(id, createSalaryDto);
    let status = HttpStatus.OK;
    if (!data) status = HttpStatus.NOT_FOUND;
    return { status, data };
  }


}
