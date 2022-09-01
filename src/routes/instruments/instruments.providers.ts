import { Instrument } from './entities/instrument.entity'

export const instrumentsProviders = [
  {
    provide: 'INSTRUMENTS_REPOSITORY',
    useValue: Instrument
  }
]
