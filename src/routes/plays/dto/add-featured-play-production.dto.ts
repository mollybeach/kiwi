import { ApiProperty } from '@nestjs/swagger'

export class AddFeaturedPlayProductionDto {
  @ApiProperty()
  productionId: string
}
