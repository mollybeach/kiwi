import { Play } from './entities/play.entity'
import { FeaturedPlayArtistContribution } from './entities/featured-play-artist-contribution.entity'
import { FeaturedPlayProduction } from './entities/featured-play-production.entity'
import { OrchestrationBook } from './orchestrations/orchestration-books/entities/orchestration-book.entity'

export const playsProviders = [
  {
    provide: 'PLAYS_REPOSITORY',
    useValue: Play
  },
  {
    provide: 'ORCHESTRATION_BOOKS_REPOSITORY',
    useValue: OrchestrationBook
  },
  {
    provide: 'FEATURED_PLAY_ARTISTS_REPOSITORY',
    useValue: FeaturedPlayArtistContribution
  },
  {
    provide: 'FEATURED_PLAY_PRODUCTIONS_REPOSITORY',
    useValue: FeaturedPlayProduction
  }
]
