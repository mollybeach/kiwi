import { ApiProperty } from '@nestjs/swagger'
import { VenueStageConfiguration } from '../../venues/entities/venue.types'
import { LicenseType } from '../entities/production.entity'

export class CreateProductionDto {
  @ApiProperty()
  studioId: string

  @ApiProperty()
  institutionId: string

  @ApiProperty()
  playId: string

  @ApiProperty()
  venueId?: string

  @ApiProperty()
  runtime?: number

  @ApiProperty()
  productionStartDate?: Date

  @ApiProperty()
  productionEndDate?: Date

  @ApiProperty()
  captureStartDate?: Date

  @ApiProperty()
  captureEndDate?: Date

  @ApiProperty()
  licenseType?: LicenseType

  @ApiProperty()
  stageConfiguration?: VenueStageConfiguration

  @ApiProperty()
  percentSeatsSold?: number
}
