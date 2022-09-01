import { ApiProperty } from '@nestjs/swagger'
import {
  ProductionContributionName,
  ProductionContributionType
} from '../entities/production-contribution.types'

export class CreateProductionContributionDto {
  @ApiProperty()
  productionId: string

  @ApiProperty()
  artistId: string

  @ApiProperty()
  contributionType: ProductionContributionType

  @ApiProperty()
  contributionName: ProductionContributionName

  @ApiProperty()
  characterId?: string

  @ApiProperty()
  orchestrationBookId?: string

  @ApiProperty()
  award?: string
}
