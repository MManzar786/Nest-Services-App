/* eslint-disable prettier/prettier */
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { ProductVariation } from './entities/product-variation.entity';
import { ProductVariationService } from './product-variation.service';

@Controller('productVariations')
export class ProductVariationsController extends BaseController<ProductVariation> {
  constructor(
    private readonly productVariationsService: ProductVariationService,
  ) {
    super(productVariationsService);
  }

  @Get('all')
  async findAll(@Res() res): Promise<any[]> {
    try {
      const results: any[] =
        await this.productVariationsService.getAllProductVariations();
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }

  @Get('byProductId/:id')
  async findProductVariationsBybyVendorId(
    @Res() res,
    @Param('id') id: number,
  ): Promise<any[]> {
    try {
      const results: any[] =
        await this.productVariationsService.getAllProductVariationsByProductId(
          id,
        );
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }
  @Get('byCategoryId/:id')
  async findProductVariationsbyCategoryId(
    @Res() res,
    @Param('id') id: number,
  ): Promise<any[]> {
    try {
      const results: any[] =
        await this.productVariationsService.getAllProductVariationsByProductId(
          id,
        );
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }
}
