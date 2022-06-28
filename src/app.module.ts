import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TSModule } from './modules/ModuleTS/TS.module';
import { UsersModule } from './modules/users/users.module';
import { AuthService } from './modules/users/auth/auth.service';
import { AuthModule } from './modules/users/auth/auth.module';
import { UserService } from './modules/users/service/user/user.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { HttpConfigService } from './httpConfigService';
import  configuration from './modules/users/config/configuration';
import { Firm } from './modules/users/entity/firm.entity';
import { Permission } from './modules/users/entity/permission.entity';
import { Role } from './modules/users/entity/role.entity';
import { UCR } from './modules/users/entity/UCR.entity';
import { User } from './modules/users/entity/user.entity';
import { LoggerService } from './modules/users/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot({
      isGlobal: true, 
      load: [configuration],  
    }),TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'test1',
      entities: ['*.entity.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
   
    TSModule,
    UsersModule,
    AuthModule,
    HttpModule.registerAsync({
      useClass: HttpConfigService,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService, UserService, AuthService, JwtService],
})
export class AppModule {}
