import { Connection } from 'typeorm';
import { InformeOrm } from '../entity/informe.orm';



export const informeProvider = [
  {
    provide: 'INFORME_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(InformeOrm),
    inject: ['DATABASE_CONNECTION'],
  },
];

