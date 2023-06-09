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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
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
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BaseService);
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map