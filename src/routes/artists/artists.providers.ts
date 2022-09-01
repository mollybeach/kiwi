import { Artist } from './entities/artist.entity'

export const artistsProviders = [
  {
    provide: 'ARTISTS_REPOSITORY',
    useValue: Artist
  }
]
