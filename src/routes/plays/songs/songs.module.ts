import { Module } from '@nestjs/common'
import { SongsService } from './songs.service'
import { SongsController } from './songs.controller'
import { songsProviders } from './songs.providers'

@Module({
  controllers: [SongsController],
  providers: [SongsService, ...songsProviders]
})
export class SongsModule {}
