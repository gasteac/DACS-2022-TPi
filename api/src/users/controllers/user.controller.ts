import { Post, Body, Controller } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { UserService } from '../services/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
