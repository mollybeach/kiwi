import {
  AllowNull,
  BelongsTo,
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
import { Production } from '../../productions/entities/production.entity'
import { VenueStageConfiguration } from './venue.types'
import { v4 as uuidv4 } from 'uuid'
import { Studio } from '../../studios/entities/studio.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'venues',
  indexes: [
    {
      name: 'venues_name_idx',
      fields: ['name'],
      unique: true
    }
  ]
})
export class Venue extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Studio)
  @Column
  studioId?: string

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  street: string

  @AllowNull(false)
  @Column
  city: string

  @AllowNull(false)
  @Column
  state: string

  @AllowNull(false)
  @Column
  zipcode: string

  @Column
  latitude?: number

  @Column
  longitude?: number

  @Column
  website?: string

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  stageConfiguration?: VenueStageConfiguration[]

  @Column
  specialFeatures?: string

  @Column
  venueCapacity?: string

  @Column
  completionYear?: string

  @Column
  resourceLocation?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Studio, {
    onDelete: 'CASCADE',
    foreignKey: 'studioId'
  })
  studio?: Studio

  @HasMany(() => Production, 'productionId')
  productions: Production[]
}
