import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'

import { Play } from '../../entities/play.entity'
import { v4 as uuidv4 } from 'uuid'
import {
  OrchestrationMusicGenre,
  OrchestrationMusicGenreSubcategory,
  OrchestrationMusicMoodStyle,
  OrchestrationMusicStyle,
  OrchestrationTypes
} from './orchestration.types'
import { OrchestrationBook } from '../orchestration-books/entities/orchestration-book.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_orchestrations',
  indexes: [
    {
      name: 'play_orchestrations_name_play_id_idx',
      fields: ['play_id', 'orchestration_name'],
      unique: true
    }
  ]
})
export class Orchestration extends Model {
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
  orchestrationName: string

  @Column
  orchestrationDescription?: string

  @Column
  orchestrationType?: OrchestrationTypes

  @Column
  musicStyle?: OrchestrationMusicStyle

  @Column
  musicMoodStyle?: OrchestrationMusicMoodStyle

  @Column
  musicGenrePrimaryCategory?: OrchestrationMusicGenre

  @Column
  musicGenrePrimarySubcategory?: OrchestrationMusicGenreSubcategory

  @Column
  musicGenreSecondaryCategory?: OrchestrationMusicGenre

  @Column
  musicGenreSecondarySubcategory?: OrchestrationMusicGenreSubcategory

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Play, {
    onDelete: 'CASCADE',
    foreignKey: 'playId'
  })
  play: Play

  @HasMany(() => OrchestrationBook, 'playOrchestrationId')
  orchestrationBooks?: OrchestrationBook[]
}
