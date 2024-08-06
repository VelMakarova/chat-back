import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const Chats = new Schema({
  _id: Schema.Types.ObjectId,
  participants: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  messages: [],
  hasUnread: Boolean,
});
