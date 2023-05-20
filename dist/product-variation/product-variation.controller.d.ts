import { BaseController } from '../base/base.controller';
import { ProductVariation } from './entities/product-variation.entity';
import { ProductVariationService } from './product-variation.service';
export declare class ProductVariationsController extends BaseController<ProductVariation> {
    private readonly productVariationsService;
    constructor(productVariationsService: ProductVariationService);
    findAll(res: any): Promise<any[]>;
    findProductVariationsBybyVendorId(res: any, id: number): Promise<any[]>;
    findProductVariationsbyCategoryId(res: any, id: number): Promise<any[]>;
}
