
import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { IUnitOfWork } from 'src/infrastructure/contracts/unitOfWork.interface';
import { InformeOrm } from 'src/infrastructure/database/entity/informe.orm';
import { Informe } from 'src/Entidad/informe';


export class SearchInformeService{

  constructor(private readonly _unitOfWork: IUnitOfWork) {}

  async execute() : Promise<SearchInformeResponse>{
    const informes: Informe[] = await this._unitOfWork.informeRepository.find();
    
    console.log(informes);
    return new SearchInformeResponse(informes);
  }

}

export class SearchInformeResponse{
  constructor(public readonly _informes: Informe[]) {}
}

