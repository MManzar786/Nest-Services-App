import { Repository } from 'typeorm';
import { BaseEntity } from './base.entitiy';
import { IBaseService } from './IBase.service';
export declare class BaseService<T extends BaseEntity> implements IBaseService<T> {
    private readonly genericRepository;
    constructor(genericRepository: Repository<T>);
    create(entity: any): Promise<number>;
    getAll(): Promise<T[]>;
    get(id: number): Promise<T>;
    delete(id: number): void;
    update(entity: any): Promise<any>;
}
