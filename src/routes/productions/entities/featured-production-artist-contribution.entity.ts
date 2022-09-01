import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Artist } from '../../artists/entities/artist.entity'
import { ProductionContribution } from '../production-contributions/entities/production-contribution.entity'
import { Production } from './production.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'featured_production_artist_contributions',
  indexes: [
    {
      name: 'featured_production_id_artist_id_production_contribution_id_idx',
      fields: ['production_id', 'artist_id', 'production_contribution_id'],
      unique: true
    }
  ]
})
export class FeaturedProductionArtistContribution extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Production)
  @AllowNull(false)
  @Column
  productionId: string

  @ForeignKey(() => Artist)
  @AllowNull(false)
  @Column
  artistId: string

  @ForeignKey(() => ProductionContribution)
  @AllowNull(false)
  @Column
  productionContributionId: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Artist, {
    onDelete: 'CASCADE',
    foreignKey: 'artistId'
  })
  artist: Artist

  @BelongsTo(() => ProductionContribution, {
    onDelete: 'CASCADE',
    foreignKey: 'productionContributionId'
  })
  contribution: ProductionContribution
}
