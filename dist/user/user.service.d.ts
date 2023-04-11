import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BaseService } from 'src/base/base.service';
export declare class UsersService extends BaseService<User> {
    private readonly repo;
    constructor(repo: Repository<User>);
    validateUser(username: string, password: string): Promise<any>;
    login(user: any): Promise<{
        success: boolean;
    }>;
}
