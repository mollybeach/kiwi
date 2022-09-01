import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateSongDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  website?: string

  @ApiProperty()
  songDuration?: string

  @ApiProperty()
  scoreNumber?: string

  @ApiProperty()
  characterIds?: string[]
}
