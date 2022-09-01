import { ApiProperty } from '@nestjs/swagger'
import {
  OrchestrationMusicGenre,
  OrchestrationMusicGenreSubcategory,
  OrchestrationMusicMoodStyle,
  OrchestrationMusicStyle,
  OrchestrationTypes
} from '../entities/orchestration.types'

export class CreateOrchestrationDto {
  @ApiProperty()
  orchestraName: string

  @ApiProperty()
  orchestraDescription: string

  @ApiProperty()
  orchestrationType?: OrchestrationTypes

  @ApiProperty()
  musicStyle?: OrchestrationMusicStyle

  @ApiProperty()
  musicMoodStyle?: OrchestrationMusicMoodStyle

  @ApiProperty()
  musicGenrePrimaryCategory?: OrchestrationMusicGenre

  @ApiProperty()
  musicGenrePrimarySubcategory?: OrchestrationMusicGenreSubcategory

  @ApiProperty()
  musicGenreSecondaryCategory?: OrchestrationMusicGenre

  @ApiProperty()
  musicGenreSecondarySubcategory?: OrchestrationMusicGenreSubcategory
}
