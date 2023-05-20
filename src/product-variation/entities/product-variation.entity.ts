/* eslint-disable prettier/prettier */
import { BaseEntity } from 'src/base/base.entitiy';
import { Order } from 'src/order/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from 'src/product/entities/product.entity';

@Entity('productVariation')
export class ProductVariation extends BaseEntity {
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
  imageUrl: string;

  @Column()
  price: number;

  @Column()
  productId: number;

  @ManyToOne(() => Product, (product) => product.productVariations)
  product: Product;
}