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
import { Artist } from '../../artists/entities/artist.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'
import { Institution } from './institution.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'featured_institution_artist_contributions'
})
export class FeaturedInstitutionArtistContribution extends Model {
  @ForeignKey(() => Institution)
  @Index({
    name: 'featured_institution_id_production_contribution_id_idx',
    unique: true
  })
  @AllowNull(false)
  @Column
  institutionId: string

  @ForeignKey(() => ProductionContribution)
  @Index({
    name: 'featured_institution_id_production_contribution_id_idx',
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
