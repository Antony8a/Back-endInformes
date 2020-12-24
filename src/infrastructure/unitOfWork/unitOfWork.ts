import { IUnitOfWork } from '../contracts/unitOfWork.interface';
import { Connection, EntityManager, QueryRunner } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { InformeRepository } from '../repositories/informe.repository';

@Injectable()
export class UnitOfWork implements IUnitOfWork{

  private readonly queryRunner: QueryRunner;
  private transactionManager: EntityManager;
  public informeRepository : InformeRepository;

  constructor(@Inject('DATABASE_CONNECTION') private readonly asyncDatabaseConnection: Connection) {
    this.queryRunner = this.asyncDatabaseConnection.createQueryRunner();
    this.informeRepository = this.asyncDatabaseConnection.getCustomRepository(InformeRepository);
  }

  setTransactionManager(){
    this.transactionManager = this.queryRunner.manager;
  }

  async complete(work: () => any): Promise<any> {
    try{
      const response = await work();
      await this.queryRunner.commitTransaction();
      return response;
    }catch (error){
      await this.queryRunner.rollbackTransaction();
      return error.toString();
    }finally {
      await this.queryRunner.release();
    }
  }

  async start() {
    await this.queryRunner.startTransaction();
    this.setTransactionManager();
  }

}