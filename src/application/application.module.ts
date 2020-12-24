import { Module } from '@nestjs/common';
import { Informe } from 'src/Entidad/informe';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { CreateInformeService } from './create.informe.service';
import { SearchInformeService } from './searchInforme.service';


@Module({
  imports: [
    Informe,
    InfrastructureModule,
    CreateInformeService,
    SearchInformeService
  ],
  exports: [
    Informe,
    
    CreateInformeService,
    SearchInformeService
  ]
})
export class ApplicationModule{}
