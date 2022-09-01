import { Test, TestingModule } from '@nestjs/testing'
import { PlayContributionsService } from './play-contributions.service'

describe('PlayContributionsService', () => {
  let service: PlayContributionsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayContributionsService]
    }).compile()

    service = module.get<PlayContributionsService>(PlayContributionsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
