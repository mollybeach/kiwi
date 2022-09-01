import { Orchestration } from './entities/orchestration.entity'

export const orchestrationsProviders = [
  {
    provide: 'ORCHESTRATIONS_REPOSITORY',
    useValue: Orchestration
  }
]
