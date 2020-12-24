import { Module } from '@nestjs/common';
import { informeProvider } from './migrations/entities.provider';
import { databaseProviders } from './provider/database.provider';



@Module({
  providers: [
    ...databaseProviders,
    ...informeProvider
  ],
  exports: [
    ...databaseProviders,
    ...informeProvider
  ]
})
export class DatabaseModule{}