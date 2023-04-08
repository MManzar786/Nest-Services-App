import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { BaseService } from '../base/base.service';
import { Vendor } from './entites/vendor.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VendorsService extends BaseService<Vendor> {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorsRepository: Repository<Vendor>,
  ) {
    super(vendorsRepository);
  }
  getAllVendors(): any[] | PromiseLike<any[]> {
    return this.vendorsRepository.find({
      relations: ['service'],
    });
  }
}
