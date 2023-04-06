import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';

@Injectable()
export class UsersService extends BaseService<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository);
  }
}
