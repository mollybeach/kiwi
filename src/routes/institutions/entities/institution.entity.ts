import {
  AllowNull,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Production } from '../../productions/entities/production.entity'
import { Artist } from '../../artists/entities/artist.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'institutions',
  indexes: [
    {
      name: 'institutions_name_idx',
      fields: ['name']
    }
  ]
})
export class Institution extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  type: InstitutionType

  @AllowNull(false)
  @Column
  name: string

  @Column
  street?: string

  @Column
  city?: string

  @Column
  state?: string

  @Column
  zipcode?: string

  @Column
  latitude?: number

  @Column
  longitude?: number

  @Column
  website?: string

  @Column
  resourceLocation?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => Production, 'institutionId')
  productions?: Production[]

  @BelongsToMany(
    () => Production,
    'featured_institution_productions',
    'institutionId',
    'productionId'
  )
  featuredProductions?: Production[]

  @BelongsToMany(
    () => ProductionContribution,
    'featured_institution_artist_contributions',
    'institutionId',
    'productionContributionId'
  )
  featuredArtistContributions?: Array<
    ProductionContribution & { artist: Artist }
  >
}

export enum InstitutionType {
  secondarySchool = 'Secondary School',
  university = 'University',
  communityTheater = 'Community Theater',
  regionalTheater = 'Regional Theater',
  offBroadway = 'Off-Broadway',
  broadway = 'Broadway',
  nycTheater = 'NYC Theater',
  tour = 'Tour',
  international = 'International'
}
