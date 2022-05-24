import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createuser.dto';
import { User } from 'src/users/entitities/users.entity';
import { UserService } from 'src/users/services/users.service';
import { RegisterUserDto } from '../dto/auth.dto';


@Injectable()
export class AuthService {
    constructor(
      private usersService: UserService,
      //private jwtService: JwtService,
    ) {}

    async register(user: RegisterUserDto): Promise<User> {
    return await this.usersService.create(user as CreateUserDto);
  }

}