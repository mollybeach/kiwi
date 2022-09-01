import { OrchestrationBookLabel } from '../entities/orchestration-book.types'
import { ApiProperty } from '@nestjs/swagger'

export class CreateOrchestrationBookDto {
  @ApiProperty()
  playId: string

  @ApiProperty()
  playOrchestrationId: string

  @ApiProperty()
  bookName: string

  @ApiProperty()
  bookLabel?: OrchestrationBookLabel

  @ApiProperty()
  instrumentIds?: string[]
}
