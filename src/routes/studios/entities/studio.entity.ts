import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Artist } from '../../artists/entities/artist.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'
import { Production } from '../../productions/entities/production.entity'
import { v4 as uuidv4 } from 'uuid'
import { Institution } from '../../institutions/entities/institution.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'studios',
  indexes: [
    {
      name: 'studios_name_idx',
      fields: ['name']
    }
  ]
})
export class Studio extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @AllowNull(false)
  @Column({
    type: DataType.STRING
  })
  type: StudioType

  @ForeignKey(() => Institution)
  @Column
  institutionId?: string

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

  @BelongsTo(() => Institution, 'institutionId')
  institution?: Institution

  @HasMany(() => Production, 'studioId')
  productions?: Production[]

  @BelongsToMany(
    () => Production,
    'featured_institution_productions',
    'studioId',
    'productionId'
  )
  featuredProductions?: Production[]

  @BelongsToMany(
    () => ProductionContribution,
    'featured_institution_artist_contributions',
    'studioId',
    'productionContributionId'
  )
  featuredArtistContributions?: Array<
    ProductionContribution & { artist: Artist }
  >
}

export enum StudioType {
  highSchoolProgram = 'High School Program',
  middleSchoolProgram = 'Middle School Program',
  universityDepartment = 'University Department',
  universityProgram = 'University Program',
  universityStudentRunOrganization = 'University Student Run Organization',
  allAgesCommunityTheater = 'All Ages Community Theater',
  youthOnlyCommunityTheater = 'Youth Only Community Theater',
  youthRunCommunityTheaterOrganization = 'Youth Run Community Theater Organization',
  commercialTheater = 'Commercial Theater',
  nonProfitLORTTheater = 'Non-Profit LORT Theater',
  nonProfitNonUnionTheater = 'Non-Profit Non-Union Theater',
  nonProfitTheater = 'Non-Profit Theater',
  touringProductionOrganization = 'Touring Production Organization',
  internationalProductionOrganization = 'International Production Organization'
}
