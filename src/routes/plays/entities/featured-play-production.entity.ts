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
import { Production } from '../../productions/entities/production.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'featured_play_productions'
})
export class FeaturedPlayProduction extends Model {
  @ForeignKey(() => Play)
  @AllowNull(false)
  @Column
  playId: string

  @ForeignKey(() => Production)
  @AllowNull(false)
  @Column
  productionId: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
