/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
import { VendorModule } from './vendor/vendor.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { Category } from './category/entities/category.entity';
import { Vendor } from './vendor/entites/vendor.entity';
import { Product } from './product/entities/product.entity';
import { Order } from './order/entities/order.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ProductVariation } from './product-variation/entities/product-variation.entity';
import { ProductVariationModule } from './product-variation/product-variation.module';
// postgresql://postgres:sVaR1DFzQKChuXpywNbs@containers-us-west-97.railway.app:7151/railway
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    UserModule,
    //     TypeOrmModule.forRoot({
    //       type: 'mysql',
    //       host: '217.21.84.205',
    //       port: 3306,
    //       username: 'u361559379_user',
    //       password: 'Ft/70T8Bnz',
    //       database: 'u361559379_chawalServices',
    //       entities: [User, Category, Vendor, Product, Order],
    //       synchronize: true,
    //     }),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'containers-us-west-97.railway.app',
    //   port: 7151,
    //   username: 'postgres',
    //   password: 'sVaR1DFzQKChuXpywNbs',
    //   database: 'railway',
    //   entities: [User, Category, Vendor, Product, Order],
    //   synchronize: true,
    // }),
    // postgresql://postgres:8xAUs516XjuG5JTBq324@containers-us-west-168.railway.app:7240/railway
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-196.railway.app',
      port: 7674,
      username: 'postgres',
      password: 'hiJLHaBFGRkNqHFd59MD',
      database: 'railway',
      entities: [User, Category, Vendor, Product, Order, ProductVariation],
      // eslint-disable-next-line prettier/prettier
      synchronize: true,
    }),
    UploadModule,
    VendorModule,
    ProductModule,
    CategoryModule,
    OrderModule,
    ProductVariationModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
})
export class AppModule {}
