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
exports.ProductVariationsController = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("../base/base.controller");
const product_variation_service_1 = require("./product-variation.service");
let ProductVariationsController = class ProductVariationsController extends base_controller_1.BaseController {
    constructor(productVariationsService) {
        super(productVariationsService);
        this.productVariationsService = productVariationsService;
    }
    async findAll(res) {
        try {
            const results = await this.productVariationsService.getAllProductVariations();
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
    async findProductVariationsBybyVendorId(res, id) {
        try {
            const results = await this.productVariationsService.getAllProductVariationsByProductId(id);
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
    async findProductVariationsbyCategoryId(res, id) {
        try {
            const results = await this.productVariationsService.getAllProductVariationsByProductId(id);
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
};
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductVariationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('byProductId/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductVariationsController.prototype, "findProductVariationsBybyVendorId", null);
__decorate([
    (0, common_1.Get)('byCategoryId/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductVariationsController.prototype, "findProductVariationsbyCategoryId", null);
ProductVariationsController = __decorate([
    (0, common_1.Controller)('productVariations'),
    __metadata("design:paramtypes", [product_variation_service_1.ProductVariationService])
], ProductVariationsController);
exports.ProductVariationsController = ProductVariationsController;
//# sourceMappingURL=product-variation.controller.js.map