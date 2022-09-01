import { Module } from '@nestjs/common'
import { InstrumentsService } from './instruments.service'
import { InstrumentsController } from './instruments.controller'
import { instrumentsProviders } from './instruments.providers'

@Module({
  controllers: [InstrumentsController],
  providers: [InstrumentsService, ...instrumentsProviders]
})
export class InstrumentsModule {}
