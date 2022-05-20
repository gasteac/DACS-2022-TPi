import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createuser.dto';
import { User } from '../entitities/users.entity';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
    private roleService: RoleService,
  ) {}

  async findOne(options: any): Promise<User> {
    return await this.userRepository.findOne(options);
  }

  async findAll(userId: number): Promise<User[]> {
    return this.userRepository.findAll({ where: { userId } });
  }

  async create(user: CreateUserDto): Promise<User> {
    let { roleId } = user;
    const roles = await this.roleService.findAll();
    const exist = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (exist) {
      throw new UnauthorizedException('User already exists');
    }
    if (!roleId) {
      roleId = roles[0].id;
    }
    if (roleId) {
      if (!roles.find((role) => role.id === roleId)) {
        throw new UnauthorizedException('Invalid role');
      }
    }
    const newUser = new User({ ...user, roleId });
    await newUser.save();
    return newUser;
  }
}
