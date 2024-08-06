import mongoose from 'mongoose';
import { User } from '../../users/interfaces/users.interface';

export interface ChatsInterface extends Document {
  participants: mongoose.Types.ObjectId[] | User[];
  messages: [];
  hasUnread: boolean;
}
