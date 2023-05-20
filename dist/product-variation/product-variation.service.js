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
exports.ProductVariationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../base/base.service");
const product_variation_entity_1 = require("./entities/product-variation.entity");
let ProductVariationService = class ProductVariationService extends base_service_1.BaseService {
    constructor(productVariationsRepository) {
        super(productVariationsRepository);
        this.productVariationsRepository = productVariationsRepository;
    }
    getAllProductVariations() {
        return this.productVariationsRepository.find({
            relations: ['product', 'product.vendor'],
        });
    }
    getAllProductVariationsByProductId(id) {
        return this.productVariationsRepository.find({
            where: { productId: id },
            relations: ['product', 'product.vendor'],
        });
    }
    getAllProductVariationsByCategoryId(id) {
        return this.productVariationsRepository
            .createQueryBuilder('productVariation')
            .leftJoinAndSelect('productVariation.product', 'product')
            .leftJoinAndSelect('product.vendor', 'vendor')
            .where('category.id = :categoryId', { categoryId: id })
            .getMany();
    }
};
ProductVariationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_variation_entity_1.ProductVariation)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductVariationService);
exports.ProductVariationService = ProductVariationService;
//# sourceMappingURL=product-variation.service.js.map