import { ApiProperty } from '@nestjs/swagger'

export class AddFeaturedInstitutionProductionDto {
  @ApiProperty()
  productionId: string
}
