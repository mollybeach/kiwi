import {
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
import { Brand } from '../../brands/entities/brand.entity'
import { Song } from '../songs/entities/song.entity'
import { Character } from '../characters/entities/character.entity'
import { Orchestration } from '../orchestrations/entities/orchestration.entity'
import { PlayContribution } from '../play-contributions/entities/play-contribution.entity'
import { Artist } from '../../artists/entities/artist.entity'
import { Production } from '../../productions/entities/production.entity'
import { ProductionContribution } from '../../productions/production-contributions/entities/production-contribution.entity'
import { v4 as uuidv4 } from 'uuid'

@Table({
  underscored: true,
  timestamps: true,
  tableName: 'plays',
  indexes: [
    {
      name: 'plays_brand_id_idx',
      fields: ['brand_id']
    },
    {
      name: 'plays_license_name_id_idx',
      fields: ['license_name']
    }
  ]
})
export class Play extends Model {
  @PrimaryKey
  @Default(uuidv4)
  @Column
  readonly id: string

  @ForeignKey(() => Brand)
  @Column
  brandId: string

  @BelongsTo(() => Brand, {
    onDelete: 'CASCADE',
    foreignKey: 'brandId'
  })
  brand: Brand

  @Column({
    type: DataType.STRING
  })
  playType: PlayType

  @Column
  licenseName: string

  @Column
  licenseHouse?: LicenseHouse

  @Column
  licenseWebsite?: string

  @Column
  originalProductionYear?: string

  @Column
  shortDescription?: string

  @Column
  longDescription?: string

  @Column
  synopsis?: string

  @Column
  history?: string

  @Column
  duration?: number

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  awards?: string[]

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  genres?: Genre[]

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  themes?: string[]

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  vocalDemands?: string[]

  @Column({
    type: DataType.ARRAY(DataType.STRING)
  })
  vocalRequirements?: VocalRequirement[]

  @Column
  ensembleSize?: string

  @Column
  numberOfActs?: number

  @Column
  audienceRating?: string

  @Column
  playSetting?: string

  @Column
  danceRequirements?: string

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @HasMany(() => Character, 'playId')
  characters?: Character[]

  @HasMany(() => Song, 'playId')
  songs?: Song[]

  @HasMany(() => Orchestration, 'playId')
  orchestrations?: Orchestration[]

  @HasMany(() => PlayContribution, 'playId')
  contributions?: PlayContribution[]

  @BelongsToMany(
    () => Production,
    'featured_play_productions',
    'playId',
    'productionId'
  )
  featuredProductions?: Production[]

  @BelongsToMany(
    () => ProductionContribution,
    'featured_play_artist_contributions',
    'playId',
    'productionContributionId'
  )
  featuredArtistContributions: Array<
    ProductionContribution & { artist: Artist }
  >
}

export enum PlayType {
  musicalFullLength = 'Musical, Full-Length',
  musicalShort = 'Musical, Short',
  musicalRevueCabaret = 'Musical, Revue/Cabaret',
  playFullLength = 'Play, Full-Length',
  playShort = 'Play, Short',
  playTenMinute = 'Play, 10-Minute'
}

export enum LicenseHouse {
  mti = 'MTI',
  concord = 'Concord',
  trw = 'TRW',
  broadwayLicensing = 'Broadway Licensing',
  dramatistsPlayServices = 'Dramatists Play Services',
  other = 'Other'
}

export enum VocalRequirement {
  smallChorus = 'Small Chorus',
  mediumChorus = 'Medium Chorus',
  largeChorus = 'Large Chorus',
  strongLargeChorus = 'Strong/Large Chorus',
  vocalDemandsEasy = 'Vocal Demands - Easy',
  vocalDemandsModerate = 'Vocal Demands - Moderate',
  vocalDemandsDifficult = 'Vocal Demands - Difficult',
  trainedSingers = 'Trained Singers'
}

export enum Genre {
  comedy = 'Comedy',
  drama = 'Drama',
  dramaticComedy = 'Dramatic Comedy',
  darkComedy = 'Dark Comedy',
  satire = 'Satire',
  politicalSatire = 'Political Satire',
  melodrama = 'Melodrama',
  pantomime = 'Pantomime',
  farce = 'Face',
  fantasy = 'Fantasy',
  adventure = 'Adventure',
  adaptationsLiterature = 'Adaptations (Literature)',
  adaptationsShakespeare = 'Adaptations (Shakespeare)',
  adaptationsStageScreen = 'Adaptations (Stage & Screen)',
  youngAudiences = 'Theater for Young Audiences',
  mystery = 'Mystery',
  thriller = 'Thriller',
  christmas = 'Christmas',
  holiday = 'Holiday',
  biography = 'Biography',
  fablesFolktales = 'Fables/Folktales',
  period = 'Period',
  experimental = 'Experimental',
  chancelDramaPageant = 'Chancel Drama/Pageant',
  scienceFiction = 'Science Fiction',
  parodySpoof = 'Parody/Spoof',
  docudramaHistoric = 'Docudrama/Historic',
  commediaDelArte = 'Commedia Del Arte',
  faithBased = 'Faith-Based',
  romanticComedy = 'Romantic Comedy'
}

export enum PlayTheme {
  adolescenseChildhood = 'Adolescence/Childhood',
  aging = 'Aging',
  autism = 'Autism',
  asianExperience = 'Asian Experience',
  betrayal = 'Betrayal',
  blackExperience = 'Black Experience',
  business = 'Business',
  christianity = 'Christianity',
  currentEvents = 'Current Events',
  death = 'Death',
  fairyTales = 'Fairy Tales',
  friendship = 'Friendship',
  illnessHealth = 'Illness/Health',
  jewishExperience = 'Jewish Experience',
  LGBTQ = 'LGBTQ+ Experience',
  love = 'Love',
  marriage = 'Marriage',
  memory = 'Memory',
  parentingFamily = 'Parenting/Family',
  politics = 'Politics',
  religion = 'Religion',
  sports = 'Sports',
  warMilitary = 'War Military Experience',
  disability = 'Disability',
  womensExperience = "Women's Experience",
  latinoLatinaExperience = 'Latino/Latina Experience',
  economicalFinancialExperience = 'Financial Interest',
  theaterEntertainment = 'Theater/Entertainment Industry',
  media = 'Media',
  asianAmericanExperience = 'American/American Experience',
  education = 'Education',
  sexuality = 'Sexuality',
  indiginousExperience = 'Indigenous Peoples’ Experience',
  middleEasternExperience = 'Middle Eastern Experience',
  environmentClimate = 'environmentClimate',
  grief = 'Grief',
  masculinity = 'Masculinity',
  mentalHealth = 'Mental Health',
  race = 'Race',
  romance = 'Romance',
  supernatural = 'Supernatural',
  trueStory = 'True Story',
  classSocioeconomic = 'Class/Socioeconomic'
}
