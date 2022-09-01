import { Module } from '@nestjs/common'
import { VenuesService } from './venues.service'
import { VenuesController } from './venues.controller'
import { venuesProviders } from './venues.providers'

@Module({
  controllers: [VenuesController],
  providers: [VenuesService, ...venuesProviders]
})
export class VenuesModule {}
