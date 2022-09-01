import { Module } from '@nestjs/common'
import { ProductionsService } from './productions.service'
import { ProductionsController } from './productions.controller'
import { productionsProviders } from './productions.providers'
import { ProductionContributionsModule } from './production-contributions/production-contributions.module'

@Module({
  controllers: [ProductionsController],
  providers: [ProductionsService, ...productionsProviders],
  imports: [ProductionContributionsModule]
})
export class ProductionsModule {}
