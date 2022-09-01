import { ApiProperty } from '@nestjs/swagger'

export class CreateArtistDto {
  @ApiProperty()
  firstName: string

  @ApiProperty()
  lastName: string

  @ApiProperty()
  dob?: Date

  @ApiProperty()
  bio?: string

  @ApiProperty()
  hometown?: string

  @ApiProperty()
  homeState?: string

  @ApiProperty()
  homeCountry?: string

  @ApiProperty()
  unionAffiliation?: string

  @ApiProperty()
  professionalName?: string

  @ApiProperty()
  awards?: string[]

  @ApiProperty()
  resourceLocation?: string

  @ApiProperty()
  website?: string
}
