import { BaseEntity } from 'src/base/base.entitiy';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class ProductVariation extends BaseEntity {
    constructor(o: Object);
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    productId: number;
    product: Product;
    orders: Order[];
}
