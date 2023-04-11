import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Category } from './entities/category.entity';
export declare class CategoryService extends BaseService<Category> {
    private readonly categoryRepository;
    constructor(categoryRepository: Repository<Category>);
}
