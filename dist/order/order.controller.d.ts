import { BaseController } from "../base/base.controller";
import { Order } from "./entities/order.entity";
import { OrdersService } from "./order.service";
export declare class OrderController extends BaseController<Order> {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(res: any): Promise<any[]>;
    addOrder(res: any, entity: Order[]): Promise<any[]>;
    setOrderDelivered(id: number): Promise<Order>;
}
