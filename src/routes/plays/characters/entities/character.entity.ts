import {
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

import { Play } from 'src/routes/plays/entities/play.entity'
import { v4 as uuidv4 } from 'uuid'
import {
  CharacterEthnicity,
  CharacterRace,
  CharacterTier,
  Gender,
  VoiceTypes
} from './character.types'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_characters',
  indexes: [
    {
      name: 'play_characters_play_id_idx',
      fields: ['play_id']
    },
    {
      name: 'play_characters_name_idx',
      fields: ['name']
    }
  ]
})
export class Character extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Play)
  @Index('play_characters_play_id_idx')
  @Column
  playId: string

  @Index('play_characters_name_idx')
  @Column
  name: string

  @Column
  tier?: CharacterTier

  @Column
  gender?: Gender

  @Column
  ageRangeTop?: number

  @Column
  ageRangeBottom?: number

  @Column
  race?: CharacterRace

  @Column
  vocalRangeTop?: string // TODO: Get Vocal Ranges

  @Column
  vocalRangeBottom?: string // TODO: Get Vocal Ranges

  @Column
  voiceType?: VoiceTypes

  @Column
  castingNotes?: string

  @Column
  description?: string

  @Column
  ethnicity?: CharacterEthnicity

  @BelongsTo(() => Play, {
    onDelete: 'CASCADE',
    foreignKey: 'playId'
  })
  play: Play
}
