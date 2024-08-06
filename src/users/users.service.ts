import { Injectable, Inject } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { User, UserChats } from './interfaces/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_MODEL')
    private usersModel: Model<User>,
    @Inject('USER_CHATS_MODEL')
    private userChatsModel: Model<UserChats>,
  ) {}
  async getUserById(id: string) {
    return this.usersModel.findById(id).exec();
  }
  async getChatsIds(id: mongoose.Types.ObjectId) {
    const result = await this.userChatsModel.findOne({ userId: id }).exec();
    return result!.chats;
  }

  async addNewUser(data: any) {
    const result = new this.usersModel(data);
    return result.save();
  }
}
