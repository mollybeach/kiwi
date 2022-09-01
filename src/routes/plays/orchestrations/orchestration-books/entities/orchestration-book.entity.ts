import {
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'
import { Orchestration } from '../../entities/orchestration.entity'
import { OrchestrationBookLabel } from './orchestration-book.types'
import { Brand } from '../../../../brands/entities/brand.entity'
import { Instrument } from '../../../../instruments/entities/instrument.entity'
import { Play } from '../../../entities/play.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_orchestration_books',
  indexes: [
    {
      name: 'play_orchestrations_book_play_orchestration_id_idx',
      fields: ['play_orchestration_id']
    }
  ]
})
export class OrchestrationBook extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Play)
  @Column
  playId: string

  @ForeignKey(() => Orchestration)
  @Column
  playOrchestrationId: string

  @Column
  bookName: string

  @Column
  bookLabel?: OrchestrationBookLabel

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Orchestration, {
    onDelete: 'CASCADE',
    foreignKey: 'playOrchestrationId'
  })
  orchestration?: Orchestration

  @BelongsToMany(
    () => Instrument,
    'play_orchestration_book_instruments',
    'orchestrationBookId',
    'instrumentId'
  )
  instruments?: Instrument[]
}
