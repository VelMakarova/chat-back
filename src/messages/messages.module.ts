import { Module } from '@nestjs/common';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { DbModule } from '../db/db.module';
import { messagesProviders } from './messages.providers';

@Module({
  imports: [DbModule],
  controllers: [MessagesController],
  providers: [MessagesGateway, MessagesService, ...messagesProviders],
  exports: [MessagesService],
})
export class MessagesModule {}
