import { BaseController } from "../base/base.controller";
import { Vendor } from "./entites/vendor.entity";
import { VendorsService } from "./vendor.service";
export declare class VendorsController extends BaseController<Vendor> {
    private readonly vendorService;
    constructor(vendorService: VendorsService);
    findAll(res: any): Promise<any[]>;
}
