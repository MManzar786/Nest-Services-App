import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { UsersController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UploadModule } from './upload/upload.module';
// postgresql://postgres:sVaR1DFzQKChuXpywNbs@containers-us-west-97.railway.app:7151/railway
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'containers-us-west-97.railway.app',
      port: 7151,
      username: 'postgres',
      password: 'sVaR1DFzQKChuXpywNbs',
      database: 'railway',
      entities: [User],
      synchronize: true,
    }),
    UploadModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
