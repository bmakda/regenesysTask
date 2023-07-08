import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly usersService: UsersService) { }

  async createToken(user: JwtPayload) {
    // const user: JwtPayload = { email: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: '21d',
      accessToken,
    };
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // console.log(payload);
    return await this.usersService.findOne(payload);
  }

}
