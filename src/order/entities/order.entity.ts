import { BaseEntity } from 'src/base/base.entitiy';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity('order')
export class Order extends BaseEntity {
  constructor() {
    super();
    // Object.assign(this, o);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  customerEmail: string;

  @Column()
  customerAddress: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp with time zone' })
  orderDate: Date;

  @Column()
  totalPrice: number;

  @Column()
  quantity: number;

  @Column()
  productId: number;

  @ManyToOne(() => Product, (product) => product.orders)
  product: Product;
}
