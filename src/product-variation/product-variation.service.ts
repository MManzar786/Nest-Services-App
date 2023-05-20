/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { ProductVariation } from './entities/product-variation.entity';

@Injectable()
export class ProductVariationService extends BaseService<ProductVariation> {
  constructor(
    @InjectRepository(ProductVariation)
    private readonly productVariationsRepository: Repository<ProductVariation>,
  ) {
    super(productVariationsRepository);
  }
  getAllProductVariations(): Promise<ProductVariation[]> {
    return this.productVariationsRepository.find({
      relations: ['product', 'product.vendor'],
    });
  }

  getAllProductVariationsByProductId(id: number): Promise<ProductVariation[]> {
    return this.productVariationsRepository.find({
      where: { productId: id },
      relations: ['product', 'product.vendor'],
    });
  }
  getAllProductVariationsByCategoryId(id: number): Promise<ProductVariation[]> {
    return this.productVariationsRepository
      .createQueryBuilder('productVariation')
      .leftJoinAndSelect('productVariation.product', 'product')
      .leftJoinAndSelect('product.vendor', 'vendor')
      .where('category.id = :categoryId', { categoryId: id })
      .getMany();
  }
}
