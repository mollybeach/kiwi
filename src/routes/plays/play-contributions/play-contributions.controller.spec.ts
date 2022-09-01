import { Test, TestingModule } from '@nestjs/testing'
import { PlayContributionsController } from './play-contributions.controller'
import { PlayContributionsService } from './play-contributions.service'

describe('PlayContributionsController', () => {
  let controller: PlayContributionsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayContributionsController],
      providers: [PlayContributionsService]
    }).compile()

    controller = module.get<PlayContributionsController>(
      PlayContributionsController
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
