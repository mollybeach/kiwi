import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Index,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript'
import { Artist } from '../../../artists/entities/artist.entity'
import { Play } from '../../entities/play.entity'
import {
  PlayContributionName,
  PlayContributionType
} from './play-contribution.types'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'play_contributions',
  indexes: [
    {
      name: 'play_contributors_play_id_idx',
      fields: ['play_id', 'artist_id']
    }
  ]
})
export class PlayContribution extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Play)
  @AllowNull(false)
  @Column
  playId: string

  @ForeignKey(() => Artist)
  @AllowNull(false)
  @Column
  artistId: string

  @AllowNull(false)
  @Column
  contributionType: PlayContributionType

  @Column
  contributionName?: PlayContributionName

  @Column
  customContributionName?: string

  @Column
  award?: string

  @BelongsTo(() => Play, {
    onDelete: 'CASCADE',
    foreignKey: 'playId'
  })
  play: Play

  @BelongsTo(() => Artist, {
    onDelete: 'CASCADE',
    foreignKey: 'artistId'
  })
  artist: Artist
}
