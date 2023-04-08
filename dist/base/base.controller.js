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
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
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
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
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
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map