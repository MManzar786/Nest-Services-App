import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { User } from './entities/user.entity';
import { Injectable, Response } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {
    super(repo);
  }

  async validateUser(username: string, password: string): Promise<any> {
    if (username === 'admin' && password === '123@abc') {
      return { username: process.env.ADMIN_USERNAME };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, password: user.password };
    if (payload.username === 'admin' && payload.password === '123@abc') {
      return { success: true };
    } else {
      return { success: false };
    }
    return null;
  }
}
