import { Test, TestingModule } from '@nestjs/testing'
import { SongsController } from './songs.controller'
import { SongsService } from './songs.service'

describe('PlaySongsController', () => {
  let controller: SongsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [SongsService]
    }).compile()

    controller = module.get<SongsController>(SongsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
