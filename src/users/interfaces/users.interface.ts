import mongoose, { Document } from 'mongoose';

export interface User extends Document {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
  logins: number;
}

export interface UserChats extends Document {
  userId: mongoose.Types.ObjectId;
  chats: mongoose.Types.ObjectId[];
}
