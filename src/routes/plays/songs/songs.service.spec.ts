import { Test, TestingModule } from '@nestjs/testing'
import { SongsService } from './songs.service'

describe('PlaySongsService', () => {
  let service: SongsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SongsService]
    }).compile()

    service = module.get<SongsService>(SongsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
