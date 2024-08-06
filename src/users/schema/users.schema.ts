import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const Users = new Schema({
  firstName: String,
  lastName: String,
  authId: String,
  email: String,
  logins: Number,
});

export const UserChats = new mongoose.Schema({
  userId: Schema.Types.ObjectId,
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chats' }],
});
