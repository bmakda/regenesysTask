import { Injectable, Inject } from '@nestjs/common';
import { Salary } from './salary.interface';
import { CreateSalaryDto } from './create-salary.dto';
import { Model } from 'mongoose';
import { Seeders } from './salary.seed';

@Injectable()
export class SalaryService {
  constructor(@Inject('SalaryModelToken') private readonly salaryModel: Model<Salary>) {
    this.seedData();
  }
  async findAll(): Promise<Salary[]> {
    return await this.salaryModel.find({});
  }

  async findOne(id: string): Promise<Salary | null> {
    return await this.salaryModel.findById(id);
  }

  async create(createSalaryDto: CreateSalaryDto): Promise<Salary> {
    const createdSalary = new this.salaryModel(createSalaryDto);
    return await createdSalary.save();
  }

  async createMany(salaryData: Salary[]): Promise<Salary[]> {
    const createdSalaries = await this.salaryModel.insertMany(salaryData);
    return createdSalaries;
  }

  async delete(id: string): Promise<any> {
    return await this.salaryModel.deleteOne({
      _id: id,
    });
    // return await this.salaryModel.collection.remove();
  }

  async updateSalary(id: string, createSalaryDto: CreateSalaryDto) {
    return await this.salaryModel.updateOne({ _id: id }, createSalaryDto);
  }

  async getAnalytics(department: string | null = null, onlyContract: boolean = false) {

    const filter = {
      $match: { 'on_contract': { $eq: true } }
    };

    const group = {
      $group: {
        _id: department,
        min: { $min: "$salary" },
        max: { $max: "$salary" },
        mean: { $avg: "$salary" },
      }
    };

    let queryArray;

    if (onlyContract) {
      queryArray = [filter, group];
    } else {
      queryArray = [group];
    }

    return await this.salaryModel.aggregate(queryArray);
  }

  async getAnalyticsSubDep() {
    const group = {
      $group: {
        _id: { dep: "$department", sub: "$sub_department" },
        salaryData: { $push: '$salary' },
      }
    };

    const project = {
      $project: {
        _id: 0,
        department: "$_id.dep",
        sub_department: "$_id.sub",
        min: { $min: "$salaryData" },
        max: { $max: "$salaryData" },
        mean: { $avg: "$salaryData" },
      }
    }

    const group2 = {
      $group: {
        _id: "$department",
        sub_departments: {
          $push: {
            sub_department: "$sub_department",
            min: "$min",
            max: "$max",
            mean: "$mean",
          }
        }
      }
    };

    return await this.salaryModel.aggregate([group, project, group2]);
  }

  async seedData(): Promise<void> {
    const alreadyAdded: Salary[] = await this.findAll() || [];

    if (alreadyAdded.length !== 0) return;

    console.log("Seeding");
    await this.createMany(Seeders);
  }
}
