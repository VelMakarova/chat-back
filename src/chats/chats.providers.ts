import { Connection } from 'mongoose';
import { Chats } from './schema/chats.schema';

export const chatsProviders = [
  {
    provide: 'CHATS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Chats', Chats, 'chats'),
    inject: ['DATABASE_CONNECTION'],
  },
];
