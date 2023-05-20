/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductVariationService } from './product-variation.service';
import { ProductVariation } from './entities/product-variation.entity';
import { ProductVariationsController } from './product-variation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductVariation])],
  controllers: [ProductVariationsController],
  exports: [ProductVariationService],
  providers: [ProductVariationService],
})
export class ProductVariationModule {}
