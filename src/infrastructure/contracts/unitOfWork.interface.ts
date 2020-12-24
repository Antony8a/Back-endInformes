import { InformeRepository } from "../repositories/informe.repository";


export interface IUnitOfWork{

  //REPOSITORIESer
  informeRepository:InformeRepository;

  start(): void;
  complete(work: () => any): Promise<any>;
}