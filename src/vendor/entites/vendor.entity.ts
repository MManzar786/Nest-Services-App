/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import { BaseEntity } from 'src/base/base.entitiy';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { Product } from 'src/product/entities/product.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity('vendor')
export class Vendor extends BaseEntity {
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
  address: string;

  @Column()
  timing: string;

  @Column()
  serviceId: number;

  @Column()
  phoneNo: string;

  @ManyToOne(() => Category, (service) => service.vendors)
  service: CategoryService;

  @OneToMany(() => Product, (product) => product.vendor)
  products: Product[];
}
