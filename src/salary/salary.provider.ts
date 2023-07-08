import { Connection } from 'mongoose';
import { SalarySchema } from '../schemas/salary.schema';

export const SalaryProviders = [
  {
    provide: 'SalaryModelToken',
    useFactory: (connection: Connection) => connection.model('Salary', SalarySchema),
    inject: ['DbConnectionToken'],
  },
];
