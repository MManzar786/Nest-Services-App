import { BaseEntity } from 'src/base/base.entitiy';
import { Vendor } from 'src/vendor/entites/vendor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('category')
export class Category extends BaseEntity {
  constructor() {
    super();
    // Object.assign(this, o);
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  @OneToMany(() => Vendor, (vendor) => vendor.service)
  vendors: Vendor[];
}
