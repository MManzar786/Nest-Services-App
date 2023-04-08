import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Product } from './entities/product.entity';
export declare class ProductsService extends BaseService<Product> {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Product>);
    getAllProducts(): Promise<Product[]>;
    getAllProductsByVendorId(id: number): Promise<Product[]>;
}
