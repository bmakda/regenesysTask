import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
import { SalaryModule } from './salary/salary.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SalaryModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
