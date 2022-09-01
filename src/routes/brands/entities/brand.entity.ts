import {
  AllowNull,
  Column,
  CreatedAt,
  Default,
  HasMany,
  Index,
  Model,
  PrimaryKey,
  Table,
  Unique,
  UpdatedAt
} from 'sequelize-typescript'
import { Play } from '../../plays/entities/play.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'brands',
  indexes: [
    {
      name: 'brand_name_idx',
      fields: ['name']
    }
  ]
})
export class Brand extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @AllowNull(false)
  @Unique
  @Column
  name: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => Play, 'brandId')
  plays: Play[]
}
