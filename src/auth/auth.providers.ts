import { Connection } from 'mongoose';
import { Auth } from './schema/auth.schema';

export const authProviders = [
  {
    provide: 'AUTH_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('UsersAuth', Auth, 'usersAuth'),
    inject: ['DATABASE_CONNECTION'],
  },
];
