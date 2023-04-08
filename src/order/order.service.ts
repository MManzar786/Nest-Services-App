import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService extends BaseService<Order> {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {
    super(ordersRepository);
  }
  getAllOrders(): any[] | PromiseLike<any[]> {
    return this.ordersRepository.find({
      order: {
        orderDate: 'DESC',
      },
      relations: ['product', 'product.vendor'],
    });
  }

  async addOrders(orders: Order[]): Promise<Order[]> {
    const result: Order[] = [];

    for (const order of orders) {
      order.orderDate = new Date();
      const createdOrder = await this.ordersRepository.save(order);
      result.push(createdOrder);
    }

    return result;
  }

  async setOrderStatusDelivered(id: number): Promise<Order> {
    const order = await this.ordersRepository.findOneById(id);
    if (!order) {
      throw new Error(`Order with id ${id} not found.`);
    }

    order.status = 'Delivered';
    return this.ordersRepository.save(order);
  }
}
