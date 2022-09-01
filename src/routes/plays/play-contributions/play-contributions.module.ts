import { Module } from '@nestjs/common'
import { PlayContributionsService } from './play-contributions.service'
import { PlayContributionsController } from './play-contributions.controller'
import { playContributionsProviders } from './play-contributions.providers'

@Module({
  controllers: [PlayContributionsController],
  providers: [PlayContributionsService, ...playContributionsProviders]
})
export class PlayContributionsModule {}
