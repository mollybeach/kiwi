import { ApiProperty } from '@nestjs/swagger'
import {
  CharacterEthnicity,
  CharacterRace,
  VoiceTypes
} from '../entities/character.types'

export class CreateCharacterDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  tier?: string

  @ApiProperty()
  gender?: string

  @ApiProperty()
  ageRangeTop?: number

  @ApiProperty()
  ageRangeBottom?: number

  @ApiProperty()
  race?: CharacterRace

  @ApiProperty()
  vocalRangeTop?: string

  @ApiProperty()
  vocalRangeBottom?: string

  @ApiProperty()
  voiceType?: VoiceTypes

  @ApiProperty()
  castingNotes?: string

  @ApiProperty()
  description?: string

  @ApiProperty()
  ethnicity?: CharacterEthnicity
}
