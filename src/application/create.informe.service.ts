
import { Injectable } from '@nestjs/common';
import { Informe } from '../../src/Entidad/Informe';
import { IUnitOfWork } from 'src/infrastructure/contracts/unitOfWork.interface';


export class CreateInformeService{

  constructor(private readonly _unitOfWork : IUnitOfWork) { }

  public async execute(request: CreateInformeRequest): Promise<CreateInformeResponse>{

    
    let newInforme:Informe;
    const _informe = await this._unitOfWork.informeRepository.findOne(request.id);
    if (_informe == undefined){
      newInforme = new Informe();
      newInforme.id = request.id;
      newInforme.imagenUrl = request.imagenUrl;
      newInforme.descripcion = request.descripcion;
      newInforme.ubicacion = request.ubicacion;
      await this._unitOfWork.start();
      const savedData = await this._unitOfWork.informeRepository.save(newInforme);
      return new CreateInformeResponse('creado satisfactoriamente');
    }
    return new CreateInformeResponse('El numero de informe existente');
  }
}

export class CreateInformeRequest{
  constructor(
    public  id:number,
    public  imagenUrl:string,
    public  descripcion:string,
    public  ubicacion:any
  ){

  }
}

export class CreateInformeResponse{
  constructor(
    public message: string,
  ){}
}
