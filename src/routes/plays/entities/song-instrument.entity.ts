import {
  AllowNull,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Play } from './play.entity'
import { Song } from '../songs/entities/song.entity'
import { OrchestrationInstrument } from '../orchestrations/entities/orchestration-instrument.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_song_instruments'
})
export class SongInstrument extends Model {
  @ForeignKey(() => Play)
  @AllowNull(false)
  @Column
  playId: string

  @ForeignKey(() => OrchestrationInstrument)
  @AllowNull(false)
  @Column
  orchestrationInstrumentId: string

  @ForeignKey(() => Song)
  @AllowNull(false)
  @Column
  playSongId: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
