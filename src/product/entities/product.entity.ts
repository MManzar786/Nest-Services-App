/* eslint-disable prettier/prettier */
import { BaseEntity } from 'src/base/base.entitiy';
import { Order } from 'src/order/entities/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Vendor } from '../../vendor/entites/vendor.entity';
import { ProductVariation } from 'src/product-variation/entities/product-variation.entity';

@Entity('product')
export class Product extends BaseEntity {
  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(o: Object) {
    super();
    Object.assign(this, o);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  price: number;

  @Column()
  vendorId: number;

  @ManyToOne(() => Vendor, (vendor) => vendor.products)
  vendor: Vendor;

  @OneToMany(() => Order, (orderItem) => orderItem.product)
  orders: Order[];

  @OneToMany(
    () => ProductVariation,
    (productVariation) => productVariation.product,
  )
  productVariations: ProductVariation[];
}
