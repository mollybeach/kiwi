import { Institution } from './entities/institution.entity'
import { FeaturedInstitutionProduction } from './entities/featured-institution-production.entity'
import { FeaturedInstitutionArtistContribution } from './entities/featured-institution-artist-contribution.entity'

export const institutionsProviders = [
  {
    provide: 'INSTITUTIONS_REPOSITORY',
    useValue: Institution
  },
  {
    provide: 'FEATURED_INSTITUTION_ARTISTS_REPOSITORY',
    useValue: FeaturedInstitutionArtistContribution
  },
  {
    provide: 'FEATURED_INSTITUTION_PRODUCTIONS_REPOSITORY',
    useValue: FeaturedInstitutionProduction
  }
]
