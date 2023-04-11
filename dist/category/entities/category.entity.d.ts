import { BaseEntity } from 'src/base/base.entitiy';
import { Vendor } from 'src/vendor/entites/vendor.entity';
export declare class Category extends BaseEntity {
    constructor();
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    vendors: Vendor[];
}
