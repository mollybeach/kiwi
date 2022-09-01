import { Module } from '@nestjs/common'
import { PlaysService } from './plays.service'
import { PlaysController } from './plays.controller'
import { playsProviders } from './plays.providers'
import { SongsModule } from './songs/songs.module'
import { CharactersModule } from './characters/characters.module'
import { OrchestrationsModule } from './orchestrations/orchestrations.module'
import { PlayContributionsModule } from './play-contributions/play-contributions.module'

@Module({
  controllers: [PlaysController],
  providers: [PlaysService, ...playsProviders],
  imports: [
    SongsModule,
    CharactersModule,
    OrchestrationsModule,
    PlayContributionsModule
  ]
})
export class PlaysModule {}
