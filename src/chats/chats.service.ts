import { Injectable, Inject } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { ChatsInterface } from './interfaces/chats.interface';

@Injectable()
export class ChatsService {
  constructor(
    @Inject('CHATS_MODEL')
    private chatsModel: Model<ChatsInterface>,
  ) {}
  async getUserChats(ids: mongoose.Types.ObjectId[]) {
    return this.chatsModel
      .find({ _id: { $in: ids } })
      .populate('participants')
      .exec();
  }
}
