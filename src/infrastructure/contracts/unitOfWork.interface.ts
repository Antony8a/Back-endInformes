import { InformeRepository } from "../repositories/informe.repository";


export interface IUnitOfWork{

  //REPOSITORIES
  informeRepository:InformeRepository;

  start(): void;
  complete(work: () => any): Promise<any>;
}