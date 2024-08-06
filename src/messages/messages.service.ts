import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { MessagesInterface } from './interfaces/messages.interface';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @Inject('MESSAGES_MODEL')
    private messagesModel: Model<MessagesInterface>,
  ) {}
  async getMessagesByChatId(id: mongoose.Types.ObjectId) {
    return this.messagesModel.find({ target: id });
  }
  async saveNewMessage(message: CreateMessageDto) {
    const newMessage = new this.messagesModel(message);
    return newMessage.save();
  }
}
