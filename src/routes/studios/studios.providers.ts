import { Studio } from './entities/studio.entity'

export const studiosProviders = [
  {
    provide: 'STUDIOS_REPOSITORY',
    useValue: Studio
  }
]
