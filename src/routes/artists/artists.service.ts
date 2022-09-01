import { Inject, Injectable } from '@nestjs/common'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'
import { Artist } from './entities/artist.entity'
import Paginator, { PaginationOptions } from '../../utils/Paginator'
import { Play } from '../plays/entities/play.entity'
import { Brand } from '../brands/entities/brand.entity'
import { PlayContribution } from '../plays/play-contributions/entities/play-contribution.entity'
import { Op } from 'sequelize'

@Injectable()
export class ArtistsService {
  constructor(
    @Inject('ARTISTS_REPOSITORY') private artistsModel: typeof Artist
  ) {}
  create(createArtistDto: CreateArtistDto): Promise<Artist> {
    return this.artistsModel.create({
      ...createArtistDto
    })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Artist)
    return paginator.paginate({
      options: {
        where: {
          [Op.or]: [
            {
              firstName: { [Op.iLike]: `%${paginationOptions.searchText}%` }
            },
            {
              lastName: { [Op.iLike]: `%${paginationOptions.searchText}%` }
            },
            {
              professionalName: {
                [Op.iLike]: `%${paginationOptions.searchText}%`
              }
            }
          ]
        }
      },
      ...paginationOptions
    })
  }

  findOne(id: string): Promise<Artist> {
    return this.artistsModel.findByPk(id)
  }

  update(id: string, updateArtistDto: UpdateArtistDto) {
    return this.artistsModel.update(
      {
        ...updateArtistDto
      },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.artistsModel.destroy({
      where: { id }
    })
  }
}
