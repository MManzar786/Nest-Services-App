"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("../base/base.controller");
const order_service_1 = require("./order.service");
let OrderController = class OrderController extends base_controller_1.BaseController {
    constructor(ordersService) {
        super(ordersService);
        this.ordersService = ordersService;
    }
    async findAll(res) {
        try {
            const results = await this.ordersService.getAllOrders();
            return res
                .status(common_1.HttpStatus.OK)
                .json({ statusCode: common_1.HttpStatus.OK, data: results });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: 'Error. Please try again later.' });
        }
    }
    async addOrder(res, entity) {
        try {
            const results = await this.ordersService.addOrders(entity.data);
            return res
                .status(common_1.HttpStatus.OK)
                .json({ statusCode: common_1.HttpStatus.OK, data: results });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: 'Error. Please try again later.', error: error });
        }
    }
    async setOrderDelivered(id) {
        return this.ordersService.setOrderStatusDelivered(id);
    }
};
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('addOrders'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, common_1.Patch)(':id/delivered'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "setOrderDelivered", null);
OrderController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map