import {
  AllowNull,
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

import { PlayContribution } from '../../plays/play-contributions/entities/play-contribution.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'artists',
  indexes: [
    {
      name: 'artists_first_last_name_idx',
      fields: ['first_name', 'last_name']
    }
  ]
})
export class Artist extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @AllowNull(false)
  @Column
  firstName: string

  @AllowNull(false)
  @Column
  lastName: string

  @Column
  dob?: Date

  @Column
  bio?: string

  @Column
  hometown?: string

  @Column
  homeState?: string

  @Column
  homeCountry?: string

  @Column
  unionAffiliation?: string

  @Column
  professionalName?: string

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  awards?: string[]

  @Column
  resourceLocation?: string

  @Column
  website?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => PlayContribution, 'artistId')
  playContributions?: PlayContribution

  @HasMany(() => ProductionContribution, 'artistId')
  productionContributions?: ProductionContribution
}
