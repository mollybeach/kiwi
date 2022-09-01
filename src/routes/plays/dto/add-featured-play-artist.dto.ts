import { ApiProperty } from '@nestjs/swagger'

export class AddFeaturedPlayArtistDto {
  @ApiProperty()
  artistId: string

  @ApiProperty()
  productionContributionId: string
}
