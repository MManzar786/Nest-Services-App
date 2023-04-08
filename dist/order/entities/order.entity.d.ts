import { BaseEntity } from 'src/base/base.entitiy';
import { Product } from '../../product/entities/product.entity';
export declare class Order extends BaseEntity {
    constructor();
    id: number;
    customerName: string;
    customerEmail: string;
    customerAddress: string;
    status: string;
    orderDate: Date;
    totalPrice: number;
    quantity: number;
    productId: number;
    product: Product;
}
