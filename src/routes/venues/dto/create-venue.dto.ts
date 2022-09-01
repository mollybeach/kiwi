import { ApiProperty } from '@nestjs/swagger'
import { VenueStageConfiguration } from '../entities/venue.types'

export class CreateVenueDto {
  @ApiProperty()
  studioId?: string

  @ApiProperty()
  name: string

  @ApiProperty()
  street: string

  @ApiProperty()
  city: string

  @ApiProperty()
  state: string

  @ApiProperty()
  zipcode: string

  @ApiProperty()
  website?: string

  @ApiProperty()
  stageConfiguration?: VenueStageConfiguration[]

  @ApiProperty()
  specialFeatures?: string

  @ApiProperty()
  venueCapacity?: string

  @ApiProperty()
  completionYear?: string
}
