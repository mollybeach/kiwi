import { ApiProperty } from '@nestjs/swagger'

export class AddFeaturedProductionArtistDto {
  @ApiProperty()
  artistId: string

  @ApiProperty()
  productionContributionId: string
}
