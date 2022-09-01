import { Test, TestingModule } from '@nestjs/testing'
import { OrchestrationsService } from './orchestrations.service'

describe('OrchestrationsService', () => {
  let service: OrchestrationsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrchestrationsService]
    }).compile()

    service = module.get<OrchestrationsService>(OrchestrationsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
