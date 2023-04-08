import { BaseController } from 'src/base/base.controller';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
export declare class UsersController extends BaseController<User> {
    private readonly usersService;
    constructor(usersService: UsersService);
}
