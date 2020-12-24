import { ObjectID } from "typeorm";

export class Informe{
    _id:ObjectID;
    id:number;
    imagenUrl:string;
    descripcion:string;
    ubicacion:any;
}