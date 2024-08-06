import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const Auth = new Schema({
  user: { type: Schema?.Types.ObjectId, ref: 'Users' },
  authId: Schema?.Types.String,
});
