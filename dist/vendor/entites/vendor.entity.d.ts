import { BaseEntity } from 'src/base/base.entitiy';
import { CategoryService } from 'src/category/category.service';
import { Product } from 'src/product/entities/product.entity';
export declare class Vendor extends BaseEntity {
    constructor(o: Object);
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    address: string;
    timing: string;
    serviceId: number;
    phoneNo: string;
    service: CategoryService;
    products: Product[];
}
