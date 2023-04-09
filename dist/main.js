/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const user_entity_1 = __webpack_require__(7);
const user_module_1 = __webpack_require__(10);
const upload_module_1 = __webpack_require__(15);
const vendor_module_1 = __webpack_require__(21);
const product_module_1 = __webpack_require__(29);
const category_module_1 = __webpack_require__(32);
const order_module_1 = __webpack_require__(34);
const category_entity_1 = __webpack_require__(24);
const vendor_entity_1 = __webpack_require__(22);
const product_entity_1 = __webpack_require__(25);
const order_entity_1 = __webpack_require__(26);
const serve_static_1 = __webpack_require__(37);
const path_1 = __webpack_require__(18);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'uploads'),
                serveRoot: '/uploads',
            }),
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


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const base_entitiy_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(9);
let User = class User extends base_entitiy_1.BaseEntity {
    constructor() {
        super();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "image_url", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('user'),
    __metadata("design:paramtypes", [])
], User);
exports.User = User;


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const typeorm_1 = __webpack_require__(9);
class BaseEntity {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
exports.BaseEntity = BaseEntity;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const user_entity_1 = __webpack_require__(7);
const user_controller_1 = __webpack_require__(11);
const user_service_1 = __webpack_require__(13);
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [user_controller_1.UsersController],
        exports: [user_service_1.UsersService],
        providers: [user_service_1.UsersService],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(3);
const base_controller_1 = __webpack_require__(12);
const user_service_1 = __webpack_require__(13);
let UsersController = class UsersController extends base_controller_1.BaseController {
    constructor(usersService) {
        super(usersService);
        this.usersService = usersService;
    }
};
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UsersService !== "undefined" && user_service_1.UsersService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseController = void 0;
const common_1 = __webpack_require__(3);
class BaseController {
    constructor(_IBaseService) {
        this._IBaseService = _IBaseService;
    }
    async findAll(res) {
        try {
            console.log('Find ALL Logs');
            const results = await this._IBaseService.getAll();
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
    async findById(res, id) {
        try {
            const result = await this._IBaseService.get(id);
            return res
                .status(common_1.HttpStatus.OK)
                .json({ statusCode: common_1.HttpStatus.OK, data: result });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: 'Error. Please check the ID, and try again later.' });
        }
    }
    async create(res, entity) {
        try {
            const result = await this._IBaseService.create(entity);
            return res
                .status(common_1.HttpStatus.CREATED)
                .json({ statusCode: common_1.HttpStatus.OK, data: result });
        }
        catch (error) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({
                message: 'Error. Please check the BODY request, and try again later.',
                error: error.message,
            });
        }
    }
    async delete(res, id) {
        try {
            const result = this._IBaseService.delete(id);
            return res
                .status(common_1.HttpStatus.CREATED)
                .json({ statusCode: common_1.HttpStatus.OK, data: result });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    async update(res, entity) {
        try {
            const result = this._IBaseService.update(entity);
            return res
                .status(common_1.HttpStatus.CREATED)
                .json({ statusCode: common_1.HttpStatus.OK, data: result });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
}
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], BaseController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, void 0]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BaseController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, void 0]),
    __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BaseController.prototype, "update", null);
exports.BaseController = BaseController;


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const typeorm_1 = __webpack_require__(4);
const typeorm_2 = __webpack_require__(9);
const user_entity_1 = __webpack_require__(7);
const common_1 = __webpack_require__(3);
const base_service_1 = __webpack_require__(14);
let UsersService = class UsersService extends base_service_1.BaseService {
    constructor(repository) {
        super(repository);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UsersService);
exports.UsersService = UsersService;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(9);
let BaseService = class BaseService {
    constructor(genericRepository) {
        this.genericRepository = genericRepository;
    }
    create(entity) {
        try {
            return new Promise((resolve, reject) => {
                this.genericRepository
                    .save(entity)
                    .then((created) => resolve(created.id))
                    .catch((err) => reject(err));
            });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    getAll() {
        try {
            console.log('Find ALL Service Logs');
            return this.genericRepository.find();
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    get(id) {
        try {
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
        return this.genericRepository.findOneById(id);
    }
    delete(id) {
        try {
            this.genericRepository.delete(id);
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
    update(entity) {
        try {
            return new Promise((resolve, reject) => {
                this.genericRepository
                    .findOneById(entity.id)
                    .then((responseGet) => {
                    try {
                        if (responseGet == null)
                            reject('Not existing');
                        let retrievedEntity = responseGet;
                        this.genericRepository
                            .save(entity)
                            .then((response) => resolve(response))
                            .catch((err) => reject(err));
                    }
                    catch (e) {
                        reject(e);
                    }
                })
                    .catch((err) => reject(err));
            });
        }
        catch (error) {
            throw new common_1.BadGatewayException(error);
        }
    }
};
BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], BaseService);
exports.BaseService = BaseService;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadModule = void 0;
const common_1 = __webpack_require__(3);
const upload_controller_1 = __webpack_require__(16);
let UploadModule = class UploadModule {
};
UploadModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [upload_controller_1.UploadController],
    })
], UploadModule);
exports.UploadModule = UploadModule;


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadController = void 0;
const common_1 = __webpack_require__(3);
const multer_1 = __webpack_require__(17);
const path_1 = __webpack_require__(18);
const uuid_1 = __webpack_require__(19);
const platform_express_1 = __webpack_require__(20);
let UploadController = class UploadController {
    async uploadMultipleFiles(files) {
        console.log('ABC');
        try {
            const fileNames = [];
            for (const file of files) {
                const filePath = `https://nest-services-app-production.up.railway.app/uploads/${file.filename}`;
                fileNames.push(filePath);
            }
            return { fileNames };
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = (0, uuid_1.v4)() + (0, path_1.extname)(file.originalname);
                cb(null, fileName);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadMultipleFiles", null);
UploadController = __decorate([
    (0, common_1.Controller)('upload')
], UploadController);
exports.UploadController = UploadController;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VendorModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const vendor_entity_1 = __webpack_require__(22);
const vendor_controller_1 = __webpack_require__(27);
const vendor_service_1 = __webpack_require__(28);
let VendorModule = class VendorModule {
};
VendorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vendor_entity_1.Vendor])],
        controllers: [vendor_controller_1.VendorsController],
        exports: [vendor_service_1.VendorsService],
        providers: [vendor_service_1.VendorsService],
    })
], VendorModule);
exports.VendorModule = VendorModule;


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Vendor = void 0;
const base_entitiy_1 = __webpack_require__(8);
const category_service_1 = __webpack_require__(23);
const category_entity_1 = __webpack_require__(24);
const product_entity_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(9);
let Vendor = class Vendor extends base_entitiy_1.BaseEntity {
    constructor(o) {
        super();
        Object.assign(this, o);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vendor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "timing", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Vendor.prototype, "serviceId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vendor.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (service) => service.vendors),
    __metadata("design:type", typeof (_b = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _b : Object)
], Vendor.prototype, "service", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.vendor),
    __metadata("design:type", Array)
], Vendor.prototype, "products", void 0);
Vendor = __decorate([
    (0, typeorm_1.Entity)('vendor'),
    __metadata("design:paramtypes", [typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object])
], Vendor);
exports.Vendor = Vendor;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const typeorm_2 = __webpack_require__(9);
const base_service_1 = __webpack_require__(14);
const category_entity_1 = __webpack_require__(24);
let CategoryService = class CategoryService extends base_service_1.BaseService {
    constructor(categoryRepository) {
        super(categoryRepository);
        this.categoryRepository = categoryRepository;
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CategoryService);
exports.CategoryService = CategoryService;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Category = void 0;
const base_entitiy_1 = __webpack_require__(8);
const vendor_entity_1 = __webpack_require__(22);
const typeorm_1 = __webpack_require__(9);
let Category = class Category extends base_entitiy_1.BaseEntity {
    constructor() {
        super();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vendor_entity_1.Vendor, (vendor) => vendor.service),
    __metadata("design:type", Array)
], Category.prototype, "vendors", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)('category'),
    __metadata("design:paramtypes", [])
], Category);
exports.Category = Category;


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Product = void 0;
const base_entitiy_1 = __webpack_require__(8);
const order_entity_1 = __webpack_require__(26);
const typeorm_1 = __webpack_require__(9);
const vendor_entity_1 = __webpack_require__(22);
let Product = class Product extends base_entitiy_1.BaseEntity {
    constructor(o) {
        super();
        Object.assign(this, o);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendor_entity_1.Vendor, (vendor) => vendor.products),
    __metadata("design:type", typeof (_b = typeof vendor_entity_1.Vendor !== "undefined" && vendor_entity_1.Vendor) === "function" ? _b : Object)
], Product.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => order_entity_1.Order, (orderItem) => orderItem.product),
    __metadata("design:type", Array)
], Product.prototype, "orders", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('product'),
    __metadata("design:paramtypes", [typeof (_a = typeof Object !== "undefined" && Object) === "function" ? _a : Object])
], Product);
exports.Product = Product;


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Order = void 0;
const base_entitiy_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(9);
const product_entity_1 = __webpack_require__(25);
let Order = class Order extends base_entitiy_1.BaseEntity {
    constructor() {
        super();
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "customerName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "customerEmail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "customerAddress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp with time zone' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Order.prototype, "orderDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Order.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product, (product) => product.orders),
    __metadata("design:type", typeof (_b = typeof product_entity_1.Product !== "undefined" && product_entity_1.Product) === "function" ? _b : Object)
], Order.prototype, "product", void 0);
Order = __decorate([
    (0, typeorm_1.Entity)('order'),
    __metadata("design:paramtypes", [])
], Order);
exports.Order = Order;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VendorsController = void 0;
const common_1 = __webpack_require__(3);
const base_controller_1 = __webpack_require__(12);
const vendor_service_1 = __webpack_require__(28);
let VendorsController = class VendorsController extends base_controller_1.BaseController {
    constructor(vendorService) {
        super(vendorService);
        this.vendorService = vendorService;
    }
    async findAll(res) {
        try {
            const results = await this.vendorService.getAllVendors();
            return res
                .status(common_1.HttpStatus.OK)
                .json({ statusCode: common_1.HttpStatus.OK, data: results });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: "Error. Please try again later." });
        }
    }
};
__decorate([
    (0, common_1.Get)("all"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], VendorsController.prototype, "findAll", null);
VendorsController = __decorate([
    (0, common_1.Controller)("vendors"),
    __metadata("design:paramtypes", [typeof (_a = typeof vendor_service_1.VendorsService !== "undefined" && vendor_service_1.VendorsService) === "function" ? _a : Object])
], VendorsController);
exports.VendorsController = VendorsController;


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VendorsService = void 0;
const typeorm_1 = __webpack_require__(4);
const typeorm_2 = __webpack_require__(9);
const base_service_1 = __webpack_require__(14);
const vendor_entity_1 = __webpack_require__(22);
const common_1 = __webpack_require__(3);
let VendorsService = class VendorsService extends base_service_1.BaseService {
    constructor(vendorsRepository) {
        super(vendorsRepository);
        this.vendorsRepository = vendorsRepository;
    }
    getAllVendors() {
        return this.vendorsRepository.find({
            relations: ['service'],
        });
    }
};
VendorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vendor_entity_1.Vendor)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], VendorsService);
exports.VendorsService = VendorsService;


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const product_entity_1 = __webpack_require__(25);
const product_controller_1 = __webpack_require__(30);
const product_service_1 = __webpack_require__(31);
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product])],
        controllers: [product_controller_1.ProductsController],
        exports: [product_service_1.ProductsService],
        providers: [product_service_1.ProductsService],
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsController = void 0;
const common_1 = __webpack_require__(3);
const base_controller_1 = __webpack_require__(12);
const product_service_1 = __webpack_require__(31);
let ProductsController = class ProductsController extends base_controller_1.BaseController {
    constructor(productsService) {
        super(productsService);
        this.productsService = productsService;
    }
    async findAll(res) {
        try {
            const results = await this.productsService.getAllProducts();
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
    async findProductsBybyVendorId(res, id) {
        try {
            const results = await this.productsService.getAllProductsByVendorId(id);
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
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('byVendorId/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ProductsController.prototype, "findProductsBybyVendorId", null);
ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductsService !== "undefined" && product_service_1.ProductsService) === "function" ? _a : Object])
], ProductsController);
exports.ProductsController = ProductsController;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const typeorm_2 = __webpack_require__(9);
const base_service_1 = __webpack_require__(14);
const product_entity_1 = __webpack_require__(25);
let ProductsService = class ProductsService extends base_service_1.BaseService {
    constructor(productsRepository) {
        super(productsRepository);
        this.productsRepository = productsRepository;
    }
    getAllProducts() {
        return this.productsRepository.find({
            relations: ['vendor', 'vendor.service'],
        });
    }
    getAllProductsByVendorId(id) {
        return this.productsRepository.find({
            where: { vendorId: id },
            relations: ['vendor', 'vendor.service'],
        });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ProductsService);
exports.ProductsService = ProductsService;


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const category_controller_1 = __webpack_require__(33);
const category_service_1 = __webpack_require__(23);
const category_entity_1 = __webpack_require__(24);
let CategoryModule = class CategoryModule {
};
CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category])],
        controllers: [category_controller_1.CategoryController],
        exports: [category_service_1.CategoryService],
        providers: [category_service_1.CategoryService],
    })
], CategoryModule);
exports.CategoryModule = CategoryModule;


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CategoryController = void 0;
const common_1 = __webpack_require__(3);
const base_controller_1 = __webpack_require__(12);
const category_service_1 = __webpack_require__(23);
let CategoryController = class CategoryController extends base_controller_1.BaseController {
    constructor(categoryService) {
        super(categoryService);
        this.categoryService = categoryService;
    }
};
CategoryController = __decorate([
    (0, common_1.Controller)('categories'),
    __metadata("design:paramtypes", [typeof (_a = typeof category_service_1.CategoryService !== "undefined" && category_service_1.CategoryService) === "function" ? _a : Object])
], CategoryController);
exports.CategoryController = CategoryController;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderModule = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const order_entity_1 = __webpack_require__(26);
const order_controller_1 = __webpack_require__(35);
const order_service_1 = __webpack_require__(36);
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_entity_1.Order])],
        controllers: [order_controller_1.OrderController],
        exports: [order_service_1.OrdersService],
        providers: [order_service_1.OrdersService],
    })
], OrderModule);
exports.OrderModule = OrderModule;


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderController = void 0;
const common_1 = __webpack_require__(3);
const base_controller_1 = __webpack_require__(12);
const order_service_1 = __webpack_require__(36);
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
                .json({ message: "Error. Please try again later." });
        }
    }
    async addOrder(res, entity) {
        try {
            const results = await this.ordersService.addOrders(entity);
            return res
                .status(common_1.HttpStatus.OK)
                .json({ statusCode: common_1.HttpStatus.OK, data: results });
        }
        catch (error) {
            return res
                .status(common_1.HttpStatus.NOT_FOUND)
                .json({ message: "Error. Please try again later.", error: error });
        }
    }
    async setOrderDelivered(id) {
        return this.ordersService.setOrderStatusDelivered(id);
    }
};
__decorate([
    (0, common_1.Get)("all"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], OrderController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("addOrders"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], OrderController.prototype, "addOrder", null);
__decorate([
    (0, common_1.Patch)(":id/delivered"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "setOrderDelivered", null);
OrderController = __decorate([
    (0, common_1.Controller)("orders"),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrdersService !== "undefined" && order_service_1.OrdersService) === "function" ? _a : Object])
], OrderController);
exports.OrderController = OrderController;


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrdersService = void 0;
const common_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(4);
const typeorm_2 = __webpack_require__(9);
const base_service_1 = __webpack_require__(14);
const order_entity_1 = __webpack_require__(26);
let OrdersService = class OrdersService extends base_service_1.BaseService {
    constructor(ordersRepository) {
        super(ordersRepository);
        this.ordersRepository = ordersRepository;
    }
    getAllOrders() {
        return this.ordersRepository.find({
            order: {
                orderDate: 'DESC',
            },
            relations: ['product', 'product.vendor'],
        });
    }
    async addOrders(orders) {
        const result = [];
        for (const order of orders) {
            order.orderDate = new Date();
            const createdOrder = await this.ordersRepository.save(order);
            result.push(createdOrder);
        }
        return result;
    }
    async setOrderStatusDelivered(id) {
        const order = await this.ordersRepository.findOneById(id);
        if (!order) {
            throw new Error(`Order with id ${id} not found.`);
        }
        order.status = 'Delivered';
        return this.ordersRepository.save(order);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], OrdersService);
exports.OrdersService = OrdersService;


/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("@nestjs/serve-static");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();

})();

/******/ })()
;