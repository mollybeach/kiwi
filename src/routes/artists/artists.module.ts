import { Module } from '@nestjs/common'
import { ArtistsService } from './artists.service'
import { ArtistsController } from './artists.controller'
import { artistsProviders } from './artists.providers'

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, ...artistsProviders]
})
export class ArtistsModule {}
