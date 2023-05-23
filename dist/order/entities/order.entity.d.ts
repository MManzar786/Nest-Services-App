import { BaseEntity } from 'src/base/base.entitiy';
import { Product } from '../../product/entities/product.entity';
import { ProductVariation } from 'src/product-variation/entities/product-variation.entity';
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
    variationId: number;
    variation: ProductVariation;
}
