import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Play } from '../../plays/entities/play.entity'

import { Venue } from '../../venues/entities/venue.entity'
import { Institution } from '../../institutions/entities/institution.entity'
import { ProductionContribution } from '../production-contributions/entities/production-contribution.entity'
import { Artist } from '../../artists/entities/artist.entity'
import { v4 as uuidv4 } from 'uuid'
import { VenueStageConfiguration } from '../../venues/entities/venue.types'
import { Studio } from '../../studios/entities/studio.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'productions',
  indexes: [
    {
      name: 'institution_productions_institution_id_idx',
      fields: ['institution_id']
    },
    {
      name: 'studio_productions_studio_id_idx',
      fields: ['studio_id']
    }
  ]
})
export class Production extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Studio)
  @AllowNull(false)
  @Column
  studioId: string

  @ForeignKey(() => Institution)
  @AllowNull(false)
  @Column
  institutionId?: string

  @ForeignKey(() => Play)
  @AllowNull(false)
  @Column
  playId: string

  @ForeignKey(() => Venue)
  @Column
  venueId?: string

  @Column
  runtime?: number

  @Column
  productionStartDate?: Date

  @Column
  productionEndDate?: Date

  @Column
  captureStartDate?: Date

  @Column
  captureEndDate?: Date

  @Column
  licenseType?: LicenseType

  @Column
  stageConfiguration?: VenueStageConfiguration

  @Column
  percentSeatsSold?: number

  @Column
  resourceLocation?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Studio, {
    onDelete: 'RESTRICT',
    foreignKey: 'studioId'
  })
  studio: Studio

  @BelongsTo(() => Institution, {
    onDelete: 'RESTRICT',
    foreignKey: 'institutionId'
  })
  institution?: Institution

  @BelongsTo(() => Play, {
    onDelete: 'RESTRICT',
    foreignKey: 'playId'
  })
  play: Play

  @BelongsTo(() => Venue, {
    onDelete: 'RESTRICT',
    foreignKey: 'venueId'
  })
  venue: Venue

  @HasMany(() => ProductionContribution, {
    foreignKey: 'productionId'
  })
  contributions: ProductionContribution[]
}

export enum LicenseType {
  fullVersion = 'Full Version',
  concertVersion = 'Concert Version',
  adaptionForYoungPerformers = 'Adaption for Young Performers'
}
