import { Connection } from 'mongoose';
import { Messages } from './schema/messages.schema';

export const messagesProviders = [
  {
    provide: 'MESSAGES_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Messages', Messages, 'messages'),
    inject: ['DATABASE_CONNECTION'],
  },
];
