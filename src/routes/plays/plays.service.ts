import { Inject, Injectable } from '@nestjs/common'
import { CreatePlayDto } from './dto/create-play.dto'
import { UpdatePlayDto } from './dto/update-play.dto'
import { Play } from './entities/play.entity'
import { AddFeaturedPlayArtistDto } from './dto/add-featured-play-artist.dto'
import { FeaturedPlayArtistContribution } from './entities/featured-play-artist-contribution.entity'
import { AddFeaturedPlayProductionDto } from './dto/add-featured-play-production.dto'
import { Brand } from '../brands/entities/brand.entity'
import { Character } from './characters/entities/character.entity'
import { Artist } from '../artists/entities/artist.entity'
import { Song } from './songs/entities/song.entity'
import { PlayContribution } from './play-contributions/entities/play-contribution.entity'
import { Orchestration } from './orchestrations/entities/orchestration.entity'
import { OrchestrationBook } from './orchestrations/orchestration-books/entities/orchestration-book.entity'
import Paginator, { PaginationOptions } from '../../utils/Paginator'
import { Op } from 'sequelize'

@Injectable()
export class PlaysService {
  constructor(
    @Inject('PLAYS_REPOSITORY') private playModel: typeof Play,
    @Inject('ORCHESTRATION_BOOKS_REPOSITORY')
    private orchestrationBookModel: typeof OrchestrationBook,
    @Inject('FEATURED_PLAY_ARTISTS_REPOSITORY')
    private featuredPlayArtistsModel: typeof FeaturedPlayArtistContribution,
    @Inject('FEATURED_PLAY_PRODUCTIONS_REPOSITORY')
    private featuredPlayProductionsModel: typeof FeaturedPlayArtistContribution
  ) {}

  create(createPlayDto: CreatePlayDto): Promise<Play> {
    return this.playModel.create({ ...createPlayDto })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Play)
    return paginator.paginate({
      options: {
        include: [
          {
            model: Brand,
            where: paginationOptions.searchText && {
              name: { [Op.iLike]: `%${paginationOptions.searchText}%` }
            }
          },
          PlayContribution
        ]
      },
      ...paginationOptions
    })
  }

  findOne(id: string): Promise<Play> {
    return this.playModel.findByPk<Play>(id, {
      include: [
        Brand,
        Character,
        Song,
        {
          model: PlayContribution,
          include: [Artist]
        },
        {
          model: Orchestration,
          include: [OrchestrationBook]
        }
      ]
    })
  }

  update(id: string, updatePlayDto: UpdatePlayDto) {
    return this.playModel.update({ ...updatePlayDto }, { where: { id } })
  }

  remove(id: string) {
    return this.playModel.destroy({
      where: { id }
    })
  }

  findAllOrchestrationBooks(playId: string): Promise<OrchestrationBook[]> {
    return this.orchestrationBookModel.findAll<OrchestrationBook>({
      where: {
        playId
      }
    })
  }

  addFeaturedArtist(
    playId: string,
    addFeaturedArtistDto: AddFeaturedPlayArtistDto
  ): Promise<FeaturedPlayArtistContribution> {
    return this.featuredPlayArtistsModel.create({
      playId,
      ...addFeaturedArtistDto
    })
  }

  removeFeaturedArtist(playId: string, artistId: string) {
    return this.featuredPlayArtistsModel.destroy({
      where: {
        playId,
        artistId
      }
    })
  }

  addFeaturedProduction(
    playId: string,
    addFeaturedProductionDto: AddFeaturedPlayProductionDto
  ): Promise<FeaturedPlayArtistContribution> {
    return this.featuredPlayProductionsModel.create({
      playId,
      ...addFeaturedProductionDto
    })
  }

  removeFeaturedProduction(playId: string, productionId: string) {
    return this.featuredPlayProductionsModel.destroy({
      where: {
        playId,
        productionId
      }
    })
  }
}
