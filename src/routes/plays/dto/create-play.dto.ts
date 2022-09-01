import { IsNotEmpty, IsString } from 'class-validator'
import {
  Genre,
  LicenseHouse,
  PlayTheme,
  PlayType
} from '../entities/play.entity'
import { ApiProperty } from '@nestjs/swagger'

export class CreatePlayDto {
  @ApiProperty()
  @IsNotEmpty()
  brandId: string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  playType: PlayType

  @ApiProperty()
  @IsNotEmpty()
  licenseName: string

  @ApiProperty()
  licenseHouse?: LicenseHouse

  @ApiProperty()
  licenseWebsite?: string

  @ApiProperty()
  originalProductionYear?: string

  @ApiProperty()
  shortDescription?: string

  @ApiProperty()
  longDescription?: string

  @ApiProperty()
  synopsis?: string

  @ApiProperty()
  history?: string

  @ApiProperty()
  duration?: number

  @ApiProperty()
  awards?: string[]

  @ApiProperty()
  genres?: Genre[]

  @ApiProperty()
  themes?: PlayTheme[]

  @ApiProperty()
  vocalRequirements?: string[]

  @ApiProperty()
  ensembleSize?: string

  @ApiProperty()
  numberOfActs?: number

  @ApiProperty()
  audienceRating?: string

  @ApiProperty()
  playSetting?: string

  @ApiProperty()
  danceRequirements?: string
}
