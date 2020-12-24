import { GenericRepository } from '../base/generic.repository';
import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm';
import { InformeOrm } from '../database/entity/informe.orm';

@Injectable()
@EntityRepository(InformeOrm)
export class InformeRepository extends GenericRepository<InformeOrm>{}
