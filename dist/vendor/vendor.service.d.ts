import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Vendor } from './entites/vendor.entity';
export declare class VendorsService extends BaseService<Vendor> {
    private readonly vendorsRepository;
    constructor(vendorsRepository: Repository<Vendor>);
    getAllVendors(): any[] | PromiseLike<any[]>;
}
