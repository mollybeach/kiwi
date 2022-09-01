import { PartialType } from '@nestjs/swagger'
import { CreateProductionContributionDto } from './create-production-contribution.dto'

export class UpdateProductionContributionDto extends PartialType(
  CreateProductionContributionDto
) {}
