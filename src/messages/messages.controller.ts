import { Controller, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { toObjectId } from '../util';

@Controller('/messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get(':id')
  async getMessagesByChatId(@Param('id') id: string) {
    return await this.messagesService.getMessagesByChatId(toObjectId(id));
  }
}
