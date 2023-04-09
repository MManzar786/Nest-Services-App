import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UsersController } from './user/user.controller';
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
// postgresql://postgres:sVaR1DFzQKChuXpywNbs@containers-us-west-97.railway.app:7151/railway
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-97.railway.app',
      port: 7151,
      username: 'postgres',
      password: 'sVaR1DFzQKChuXpywNbs',
      database: 'railway',
      entities: [User, Category, Vendor, Product, Order],
      synchronize: true,
    }),
    UploadModule,
    VendorModule,
    ProductModule,
    CategoryModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
