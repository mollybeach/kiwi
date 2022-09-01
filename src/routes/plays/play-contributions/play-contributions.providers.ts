import { PlayContribution } from './entities/play-contribution.entity'

export const playContributionsProviders = [
  {
    provide: 'PLAY_CONTRIBUTIONS_REPOSITORY',
    useValue: PlayContribution
  }
]
