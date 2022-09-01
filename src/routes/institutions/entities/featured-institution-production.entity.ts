import {
  AllowNull,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Production } from '../../productions/entities/production.entity'
import { Institution } from './institution.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'featured_institution_productions'
})
export class FeaturedInstitutionProduction extends Model {
  @ForeignKey(() => Institution)
  @AllowNull(false)
  @Column
  institutionId: string

  @ForeignKey(() => Production)
  @AllowNull(false)
  @Column
  productionId: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
