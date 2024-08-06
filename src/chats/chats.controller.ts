import { Controller, Get, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { UsersService } from '../users/users.service';
import { toObjectId } from '../util';

@Controller('/chats')
export class ChatsController {
  constructor(
    private chatsService: ChatsService,
    private usersService: UsersService,
  ) {}
  @Get(':id')
  async getChatsByUserId(@Param('id') id: string) {
    const chatIds = await this.usersService.getChatsIds(toObjectId(id));
    return await this.chatsService.getUserChats(chatIds);
  }
}
