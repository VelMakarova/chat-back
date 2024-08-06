import { Connection } from 'mongoose';
import { Users, UserChats } from './schema/users.schema';

export const usersProviders = [
  {
    provide: 'USERS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Users', Users, 'users'),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'USER_CHATS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('UserChats', UserChats, 'userChats'),
    inject: ['DATABASE_CONNECTION'],
  },
];
