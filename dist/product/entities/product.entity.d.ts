import { BaseEntity } from 'src/base/base.entitiy';
import { Order } from 'src/order/entities/order.entity';
import { Vendor } from '../../vendor/entites/vendor.entity';
import { ProductVariation } from 'src/product-variation/entities/product-variation.entity';
export declare class Product extends BaseEntity {
    constructor(o: Object);
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    vendorId: number;
    vendor: Vendor;
    orders: Order[];
    productVariations: ProductVariation[];
}
