import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { authProviders } from './auth.providers';
import { DbModule } from '../db/db.module';
import { JwtService } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [DbModule, UsersModule, HttpModule],
  controllers: [AuthController],
  providers: [AuthService, JwtService, UsersService, ...authProviders],
})
export class AuthModule {}
