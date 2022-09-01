import { ApiProperty } from '@nestjs/swagger'
import {
  PlayContributionName,
  PlayContributionType
} from '../entities/play-contribution.types'

export class CreatePlayContributionDto {
  @ApiProperty()
  artistId: string

  @ApiProperty()
  contributionType: PlayContributionType

  @ApiProperty()
  contributionName?: PlayContributionName

  @ApiProperty()
  customContributionName?: string

  @ApiProperty()
  award?: string
}
