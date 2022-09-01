import { ProductionContribution } from './entities/production-contribution.entity'

export const productionContributionsProviders = [
  {
    provide: 'PRODUCTION_CONTRIBUTIONS_REPOSITORY',
    useValue: ProductionContribution
  }
]
