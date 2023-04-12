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
      relations: ['vendor', 'vendor.service'],
    });
  }

  getAllProductsByVendorId(id: number): Promise<Product[]> {
    return this.productsRepository.find({
      where: { vendorId: id },
      relations: ['vendor', 'vendor.service'],
    });
  }
  getAllProductsByCategoryId(id: number): Promise<Product[]> {
    return this.productsRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.vendor', 'vendor')
      .leftJoinAndSelect('vendor.category', 'category')
      .where('category.id = :categoryId', { categoryId: id })
      .getMany();
  }
}
