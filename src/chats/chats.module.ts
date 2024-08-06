import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { chatsProviders } from './chats.providers';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';

@Module({
  imports: [DbModule, UsersModule],
  controllers: [ChatsController],
  providers: [ChatsService, UsersService, ...chatsProviders],
})
export class ChatsModule {}
