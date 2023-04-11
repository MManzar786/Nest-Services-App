import { BaseController } from '../base/base.controller';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
export declare class CategoryController extends BaseController<Category> {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
}
