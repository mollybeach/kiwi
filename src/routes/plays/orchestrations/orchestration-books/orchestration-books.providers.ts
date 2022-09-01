import { OrchestrationBook } from './entities/orchestration-book.entity'

export const orchestrationBooksProviders = [
  {
    provide: 'ORCHESTRATION_BOOKS_REPOSITORY',
    useValue: OrchestrationBook
  }
]
