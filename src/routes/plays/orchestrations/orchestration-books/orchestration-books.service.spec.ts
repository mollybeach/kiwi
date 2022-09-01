import { Test, TestingModule } from '@nestjs/testing'
import { OrchestrationBooksService } from './orchestration-books.service'

describe('OrchestrationBooksService', () => {
  let service: OrchestrationBooksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrchestrationBooksService]
    }).compile()

    service = module.get<OrchestrationBooksService>(OrchestrationBooksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
