
import { Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity('INFORME')
export class InformeOrm{

  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  public id: number;

  @Column()
  public imagenUrl:string;

  @Column()
  public descripcion:string;

  @Column()
  public ubicacion:any;


}
