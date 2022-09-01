import { Module } from '@nestjs/common'
import { ProductionContributionsService } from './production-contributions.service'
import { ProductionContributionsController } from './production-contributions.controller'
import { productionContributionsProviders } from './production-contributions.providers'

@Module({
  controllers: [ProductionContributionsController],
  providers: [
    ProductionContributionsService,
    ...productionContributionsProviders
  ]
})
export class ProductionContributionsModule {}
