import { Test, TestingModule } from '@nestjs/testing'
import { OrchestrationBooksController } from './orchestration-books.controller'
import { OrchestrationBooksService } from './orchestration-books.service'

describe('OrchestrationBooksController', () => {
  let controller: OrchestrationBooksController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrchestrationBooksController],
      providers: [OrchestrationBooksService]
    }).compile()

    controller = module.get<OrchestrationBooksController>(
      OrchestrationBooksController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
