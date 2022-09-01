import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Artist } from '../../../artists/entities/artist.entity'
import { Production } from '../../entities/production.entity'
import { v4 as uuidv4 } from 'uuid'
import {
  ProductionContributionName,
  ProductionContributionType
} from './production-contribution.types'
import { Character } from '../../../plays/characters/entities/character.entity'
import { OrchestrationBook } from '../../../plays/orchestrations/orchestration-books/entities/orchestration-book.entity'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'production_contributions',
  indexes: [
    {
      name: 'production_contributors_production_id_idx',
      fields: ['production_id', 'artist_id']
    }
  ]
})
export class ProductionContribution extends Model {
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

  @AllowNull(false)
  @Column
  contributionType: ProductionContributionType

  @AllowNull(false)
  @Column
  contributionName: ProductionContributionName

  @ForeignKey(() => Character)
  @Column
  characterId?: string

  @ForeignKey(() => OrchestrationBook)
  @Column
  orchestrationBookId?: string

  @Column
  award?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @BelongsTo(() => Production, {
    onDelete: 'CASCADE',
    foreignKey: 'productionId'
  })
  production: Production

  @BelongsTo(() => Artist, {
    onDelete: 'CASCADE',
    foreignKey: 'artistId'
  })
  artist: Artist

  @BelongsTo(() => Character, {
    onDelete: 'CASCADE',
    foreignKey: 'characterId'
  })
  character?: Character

  @BelongsTo(() => OrchestrationBook, {
    onDelete: 'CASCADE',
    foreignKey: 'orchestrationBookId'
  })
  orchestrationBook?: OrchestrationBook
}
