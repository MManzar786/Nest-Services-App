/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { BaseController } from '../base/base.controller';
import { Order } from './entities/order.entity';
import { OrdersService } from './order.service';

@Controller('orders')
export class OrderController extends BaseController<Order> {
  constructor(private readonly ordersService: OrdersService) {
    super(ordersService);
  }

  @Get('all')
  async findAll(@Res() res): Promise<any[]> {
    try {
      const results: any[] = await this.ordersService.getAllOrders();
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.' });
    }
  }

  @Post('addOrders')
  async addOrder(@Res() res, @Body() entity: any): Promise<any[]> {
    try {
      const results: any[] = await this.ordersService.addOrders(entity.data);
      return res
        .status(HttpStatus.OK)
        .json({ statusCode: HttpStatus.OK, data: results });
    } catch (error) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: 'Error. Please try again later.', error: error });
    }
  }

  @Patch(':id/delivered')
  async setOrderDelivered(@Param('id') id: number) {
    return this.ordersService.setOrderStatusDelivered(id);
  }
}
