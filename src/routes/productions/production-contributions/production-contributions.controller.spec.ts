import { Test, TestingModule } from '@nestjs/testing'
import { ProductionContributionsController } from './production-contributions.controller'
import { ProductionContributionsService } from './production-contributions.service'

describe('ProductionContributionsController', () => {
  let controller: ProductionContributionsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductionContributionsController],
      providers: [ProductionContributionsService]
    }).compile()

    controller = module.get<ProductionContributionsController>(
      ProductionContributionsController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
