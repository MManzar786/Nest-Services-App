import { BaseEntity } from './base.entitiy';
import { IBaseService } from './IBase.service';
export declare class BaseController<T extends BaseEntity> {
    private readonly _IBaseService;
    constructor(_IBaseService: IBaseService<T>);
    findAll(res: any): Promise<T[]>;
    findById(res: any, id: number): Promise<T>;
    create(res: any, entity: T): Promise<number>;
    delete(res: any, id: number): Promise<any>;
    update(res: any, entity: T): Promise<T>;
}
