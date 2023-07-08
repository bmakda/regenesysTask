import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const SalarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  department: { type: String, required: true },
  sub_department: { type: String, required: true },
  currency: { type: String, default: 'USD' },
  on_contract: { type: Boolean, default: false },
});

export interface Salary extends Document {
  name: string,
  salary: number,
  currency: string,
  department: string,
  sub_department: string,
  on_contract: boolean,
}
