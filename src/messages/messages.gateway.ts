import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Injectable } from '@nestjs/common';
import { MessagesService } from './messages.service';

@WebSocketGateway(3010, {
  cors: {
    origin: '*',
  },
})
@Injectable()
export class MessagesGateway {
  constructor(private messagesService: MessagesService) {}
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('newMsg')
  async msgFromClient(@MessageBody() message: any) {
    const res = await this.messagesService.saveNewMessage(message);
    this.server.emit('newMsg', res);
  }
}
