import { Sequelize } from 'sequelize-typescript';
import { Dialect } from 'sequelize/types';
import { Insurance } from 'src/packages/entitities/insurances.entity';
import { Show } from 'src/packages/entitities/shows.entity';
import { Role } from 'src/users/entitities/rols.entity';
import { User } from 'src/users/entitities/users.entity';

export const DatabaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME || 'database_development',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: (process.env.DB_DIALECT as Dialect) || 'mysql',
      });
      sequelize.addModels([Role, User, Insurance, Show]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
