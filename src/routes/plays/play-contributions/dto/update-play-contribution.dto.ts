import { PartialType } from '@nestjs/swagger'
import { CreatePlayContributionDto } from './create-play-contribution.dto'

export class UpdatePlayContributionDto extends PartialType(
  CreatePlayContributionDto
) {}
