import { Test, TestingModule } from '@nestjs/testing'
import { OrchestrationsController } from './orchestrations.controller'
import { OrchestrationsService } from './orchestrations.service'

describe('OrchestrationsController', () => {
  let controller: OrchestrationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrchestrationsController],
      providers: [OrchestrationsService]
    }).compile()

    controller = module.get<OrchestrationsController>(OrchestrationsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
