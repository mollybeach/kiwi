import {
  AllowNull,
  Column,
  CreatedAt,
  Default,
  Index,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'instruments',
  indexes: [
    {
      name: 'instruments_name_idx',
      fields: ['name', 'type'],
      unique: true
    }
  ]
})
export class Instrument extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @AllowNull(false)
  @Column
  name: string

  @AllowNull(false)
  @Column
  type: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date
}
