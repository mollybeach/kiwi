import { Production } from './entities/production.entity'
import { FeaturedProductionArtistContribution } from './entities/featured-production-artist-contribution.entity'

export const productionsProviders = [
  {
    provide: 'PRODUCTIONS_REPOSITORY',
    useValue: Production
  }
]
