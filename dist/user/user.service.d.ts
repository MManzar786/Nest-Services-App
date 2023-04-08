import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseService } from 'src/base/base.service';
export declare class UsersService extends BaseService<User> {
    constructor(repository: Repository<User>);
}
