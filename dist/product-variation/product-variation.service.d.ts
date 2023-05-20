import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { ProductVariation } from './entities/product-variation.entity';
export declare class ProductVariationService extends BaseService<ProductVariation> {
    private readonly productVariationsRepository;
    constructor(productVariationsRepository: Repository<ProductVariation>);
    getAllProductVariations(): Promise<ProductVariation[]>;
    getAllProductVariationsByProductId(id: number): Promise<ProductVariation[]>;
    getAllProductVariationsByCategoryId(id: number): Promise<ProductVariation[]>;
}
