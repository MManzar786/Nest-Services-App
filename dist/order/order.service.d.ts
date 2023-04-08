import { Repository } from 'typeorm';
import { BaseService } from '../base/base.service';
import { Order } from './entities/order.entity';
export declare class OrdersService extends BaseService<Order> {
    private readonly ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    getAllOrders(): any[] | PromiseLike<any[]>;
    addOrders(orders: Order[]): Promise<Order[]>;
    setOrderStatusDelivered(id: number): Promise<Order>;
}
