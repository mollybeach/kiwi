import { ApiProperty } from '@nestjs/swagger'

export class AddFeaturedInstitutionArtistDto {
  @ApiProperty()
  artistId: string

  @ApiProperty()
  productionContributionId: string
}
