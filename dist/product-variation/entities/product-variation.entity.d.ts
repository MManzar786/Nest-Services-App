import { BaseEntity } from 'src/base/base.entitiy';
import { Product } from 'src/product/entities/product.entity';
export declare class ProductVariation extends BaseEntity {
    constructor(o: Object);
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    productId: number;
    product: Product;
}
