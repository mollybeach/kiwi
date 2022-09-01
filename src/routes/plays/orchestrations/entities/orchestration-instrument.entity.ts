import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Index,
  Model,
  Table
} from 'sequelize-typescript'
import { Orchestration } from './orchestration.entity'
import { Instrument } from '../../../instruments/entities/instrument.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_orchestration_instruments',
  indexes: [
    {
      name: 'orchestration_instruments_play_orchestration_id_idx',
      fields: ['play_orchestration_id', 'instrument_id'],
      unique: true
    }
  ]
})
export class OrchestrationInstrument extends Model {
  @ForeignKey(() => Orchestration)
  @AllowNull(false)
  @Column
  playOrchestrationId: string

  @ForeignKey(() => Instrument)
  @AllowNull(false)
  @Column
  instrumentId: string

  @BelongsTo(() => Orchestration, {
    onDelete: 'CASCADE',
    foreignKey: 'playOrchestrationId'
  })
  orchestration: Orchestration

  @BelongsTo(() => Instrument, {
    onDelete: 'CASCADE',
    foreignKey: 'instrumentId'
  })
  instrument: Instrument
}
