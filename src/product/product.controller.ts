import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { Product } from './entities/product.entity';
import { ProductsService } from './product.service';

@Controller('products')
export class ProductsController extends BaseController<Product> {
  constructor(private readonly productsService: ProductsService) {
    super(productsService);
  }

  @Get('all')
  async findAll(@Res() res): Promise<any[]> {
    try {
      const results: any[] = await this.productsService.getAllProducts();
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }

  @Get('byVendorId/:id')
  async findProductsBybyVendorId(
    @Res() res,
    @Param('id') id: number,
  ): Promise<any[]> {
    try {
      const results: any[] =
        await this.productsService.getAllProductsByVendorId(id);
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
  async findProductsbyCategoryId(
    @Res() res,
    @Param('id') id: number,
  ): Promise<any[]> {
    try {
      const results: any[] =
        await this.productsService.getAllProductsByCategoryId(id);
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      console.log(error);

      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }
}
