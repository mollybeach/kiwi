import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  Default,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'

import { Play } from '../../entities/play.entity'
import { v4 as uuidv4 } from 'uuid'
import { Character } from '../../characters/entities/character.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_songs',
  indexes: [
    {
      name: 'play_songs_name_play_id_idx',
      fields: ['play_id', 'name'],
      unique: true
    },
    {
      name: 'play_songs_name_idx',
      fields: ['name']
    }
  ]
})
export class Song extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Play)
  @AllowNull(false)
  @Column
  playId: string

  @AllowNull(false)
  @Column
  name: string

  @Column
  website?: string

  @Column
  songDuration?: string

  @Column
  scoreNumber?: string

  @Column
  description?: string

  @BelongsTo(() => Play, {
    onDelete: 'CASCADE',
    foreignKey: 'playId'
  })
  play?: Play

  @BelongsToMany(
    () => Character,
    'play_song_characters',
    'playSongId',
    'playCharacterId'
  )
  characters?: Character[]
}
