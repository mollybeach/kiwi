import { Venue } from './entities/venue.entity'

export const venuesProviders = [
  {
    provide: 'VENUES_REPOSITORY',
    useValue: Venue
  }
]
