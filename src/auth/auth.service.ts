import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FinishRegisterDto, AddNewUserDto } from './dto/finish-register.dto';
import { User } from '../users/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_MODEL')
    private usersModel: Model<User>,
  ) {}

  async checkUserExisting(id: string) {
    return this.usersModel.exists({ authId: id });
  }

  async getUserByUserId(authId: string) {
    return this.usersModel.findOne({ authId }).exec();
  }

  async getUserWithLoginIncrements(authId: string) {
    return this.usersModel
      .findOneAndUpdate({ authId }, { $inc: { logins: 1 } }, { new: true })
      .exec();
  }

  async addUser(userData: AddNewUserDto) {
    const newUser = new this.usersModel(userData);
    return await newUser.save();
  }
  async completeUserCreating(
    authId: string,
    { firstName, lastName }: FinishRegisterDto,
  ) {
    return await this.usersModel
      .findOneAndUpdate(
        { authId },
        {
          $set: { firstName, lastName },
          $inc: { logins: 1 },
        },
        { new: true },
      )
      .exec();
  }
}
