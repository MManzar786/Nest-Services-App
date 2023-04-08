"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./user/entities/user.entity");
const user_module_1 = require("./user/user.module");
const upload_module_1 = require("./upload/upload.module");
const vendor_module_1 = require("./vendor/vendor.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const order_module_1 = require("./order/order.module");
const category_entity_1 = require("./category/entities/category.entity");
const vendor_entity_1 = require("./vendor/entites/vendor.entity");
const product_entity_1 = require("./product/entities/product.entity");
const order_entity_1 = require("./order/entities/order.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'containers-us-west-97.railway.app',
                port: 7151,
                username: 'postgres',
                password: 'sVaR1DFzQKChuXpywNbs',
                database: 'railway',
                entities: [user_entity_1.User, category_entity_1.Category, vendor_entity_1.Vendor, product_entity_1.Product, order_entity_1.Order],
                synchronize: true,
            }),
            upload_module_1.UploadModule,
            vendor_module_1.VendorModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map