import mongoose from 'mongoose';
import { User } from '../../users/interfaces/users.interface';

export interface MessagesInterface extends Document {
  date: string;
  author: mongoose.Types.ObjectId | User;
  target: mongoose.Types.ObjectId;
  content: string;
  isRead: boolean;
}
