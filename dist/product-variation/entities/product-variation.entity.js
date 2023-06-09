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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariation = void 0;
const base_entitiy_1 = require("../../base/base.entitiy");
const order_entity_1 = require("../../order/entities/order.entity");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../product/entities/product.entity");
const common_1 = require("@nestjs/common");
let ProductVariation = class ProductVariation extends base_entitiy_1.BaseEntity {
    constructor(o) {
        super();
        Object.assign(this, o);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductVariation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductVariation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductVariation.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, common_1.Optional)(),
    __metadata("design:type", String)
], ProductVariation.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductVariation.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductVariation.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.productVariations),
    __metadata("design:type", product_entity_1.Product)
], ProductVariation.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (orderItem) => orderItem.variation),
    __metadata("design:type", Array)
], ProductVariation.prototype, "orders", void 0);
ProductVariation = __decorate([
    (0, typeorm_1.Entity)('productVariation'),
    __metadata("design:paramtypes", [Object])
], ProductVariation);
exports.ProductVariation = ProductVariation;
//# sourceMappingURL=product-variation.entity.js.map