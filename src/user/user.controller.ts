import { Body, Controller, Post, Request } from '@nestjs/common';
import { BaseController } from 'src/base/base.controller';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController extends BaseController<User> {
  constructor(private readonly usersService: UsersService) {
    super(usersService);
  }
  @Post('login')
  async login(@Body() req) {
    return this.usersService.login(req);
  }
}
