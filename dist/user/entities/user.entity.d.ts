import { BaseEntity } from 'src/base/base.entitiy';
export declare class User extends BaseEntity {
    constructor();
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    image_url: string;
}
