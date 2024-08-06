import mongoose from 'mongoose';

export function toObjectId(id: string): mongoose.Types.ObjectId {
  return new mongoose.Types.ObjectId(id);
}

export function getUserIdFromToken(str: string): string {
  const i = str.indexOf('|');
  return str.substring(i + 1);
}

export function getUrlForUserDetailsById(sub: string | number): string {
  return `https://${process.env.DOMAIN}/api/v2/users/${sub}`;
}
