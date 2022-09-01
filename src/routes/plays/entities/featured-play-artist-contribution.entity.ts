import {
  AllowNull,
  Column,
  CreatedAt,
  ForeignKey,
  Index,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Play } from './play.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'featured_play_artist_contributions'
})
export class FeaturedPlayArtistContribution extends Model {
  @ForeignKey(() => Play)
  @Index({
    name: 'featured_play_id_production_contribution_id_idx',
    unique: true
  })
  @AllowNull(false)
  @Column
  playId: string

  @ForeignKey(() => ProductionContribution)
  @Index({
    name: 'featured_play_id_production_contribution_id_idx',
    unique: true
  })
  @AllowNull(false)
  @Column
  productionContributionId: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
