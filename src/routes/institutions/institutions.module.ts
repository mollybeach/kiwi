import { Module } from '@nestjs/common'
import { InstitutionsService } from './institutions.service'
import { InstitutionsController } from './institutions.controller'
import { institutionsProviders } from './institutions.providers'

@Module({
  controllers: [InstitutionsController],
  providers: [InstitutionsService, ...institutionsProviders]
})
export class InstitutionsModule {}
