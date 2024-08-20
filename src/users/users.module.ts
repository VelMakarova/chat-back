import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { RootController, UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
  imports: [DbModule],
  controllers: [UsersController, RootController],
  providers: [UsersService, ...usersProviders],
  exports: [...usersProviders],
})
export class UsersModule {}
