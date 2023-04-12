import { BaseController } from '../base/base.controller';
import { Product } from './entities/product.entity';
import { ProductsService } from './product.service';
export declare class ProductsController extends BaseController<Product> {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(res: any): Promise<any[]>;
    findProductsBybyVendorId(res: any, id: number): Promise<any[]>;
    findProductsbyCategoryId(res: any, id: number): Promise<any[]>;
}
