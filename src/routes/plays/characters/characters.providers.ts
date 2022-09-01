import { Character } from './entities/character.entity'

export const charactersProviders = [
  {
    provide: 'CHARACTERS_REPOSITORY',
    useValue: Character
  }
]
