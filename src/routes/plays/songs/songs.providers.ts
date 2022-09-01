import { Song } from './entities/song.entity'

export const songsProviders = [
  {
    provide: 'SONGS_REPOSITORY',
    useValue: Song
  }
]
