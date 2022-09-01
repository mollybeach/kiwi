import { Test, TestingModule } from '@nestjs/testing'
import { ProductionContributionsService } from './production-contributions.service'

describe('ProductionContributionsService', () => {
  let service: ProductionContributionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductionContributionsService]
    }).compile()

    service = module.get<ProductionContributionsService>(
      ProductionContributionsService
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
