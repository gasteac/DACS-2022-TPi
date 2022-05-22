import { Post, Body, Controller, Get, Request, Param } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { UserService } from '../services/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/:id')
  getUser(@Request() req, @Param('id') id: number) {
    return this.userService.findOne(id); 
  }

  @Post('/')
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }
}
