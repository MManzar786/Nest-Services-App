import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService extends BaseService<Product> {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
  ) {
    super(productsRepository);
  }
  getAllProducts(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['vendor', 'vendor.service', 'productVariations'],
    });
  }

  getAllProductsByVendorId(id: number): Promise<Product[]> {
    return this.productsRepository.find({
      where: { vendorId: id },
      relations: ['vendor', 'vendor.service', 'productVariations'],
    });
  }
  getAllProductsByCategoryId(id: number): Promise<Product[]> {
    return this.productsRepository
      .createQueryBuilder('product')
      .innerJoinAndSelect('product.vendor', 'vendor')
      .innerJoinAndSelect(
        'vendor.service',
        'category',
        'category.id = :categoryId',
        { categoryId: id },
      )
      .leftJoinAndSelect('product.productVariations', 'productVariations')
      .getMany();
  }
}
