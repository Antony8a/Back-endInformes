import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mongodb',
      url: 'mongodb+srv://witlac:1998@cluster0.lqnnj.mongodb.net/production?retryWrites=true&w=majority',
      logging: true,
      useNewUrlParser: true,
      synchronize: true,
      useUnifiedTopology: true,
      ssl: true,
      entities: ['dist/infrastructure/database/entity/*.js']
    }),
  },
];