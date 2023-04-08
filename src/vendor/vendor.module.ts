import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './entites/vendor.entity';
import { VendorsController } from './vendor.controller';
import { VendorsService } from './vendor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor])],
  controllers: [VendorsController],
  exports: [VendorsService],
  providers: [VendorsService],
})
export class VendorModule {}
