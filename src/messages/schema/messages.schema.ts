import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const Messages = new Schema({
  date: Schema.Types.Date,
  author: Schema.Types.ObjectId,
  target: Schema.Types.ObjectId,
  content: String,
  isRead: Boolean,
});
