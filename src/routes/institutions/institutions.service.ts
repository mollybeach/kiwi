import { Inject, Injectable } from '@nestjs/common'
import { CreateInstitutionDto } from './dto/create-institution.dto'
import { UpdateInstutitionDto } from './dto/update-instutition.dto'
import { Institution } from './entities/institution.entity'
import { AddFeaturedPlayArtistDto } from '../plays/dto/add-featured-play-artist.dto'
import { AddFeaturedPlayProductionDto } from '../plays/dto/add-featured-play-production.dto'
import { FeaturedInstitutionProduction } from './entities/featured-institution-production.entity'
import { FeaturedInstitutionArtistContribution } from './entities/featured-institution-artist-contribution.entity'
import Paginator, { PaginationOptions } from '../../utils/Paginator'
import { Op } from 'sequelize'

@Injectable()
export class InstitutionsService {
  constructor(
    @Inject('INSTITUTIONS_REPOSITORY')
    private institutionModel: typeof Institution,
    @Inject('FEATURED_INSTITUTION_ARTISTS_REPOSITORY')
    private featuredArtistsModel: typeof FeaturedInstitutionArtistContribution,
    @Inject('FEATURED_INSTITUTION_PRODUCTIONS_REPOSITORY')
    private featuredProductionsModel: typeof FeaturedInstitutionProduction
  ) {}

  create(createInstutitionDto: CreateInstitutionDto) {
    return this.institutionModel.create({ ...createInstutitionDto })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Institution)
    return paginator.paginate({
      options: {
        where: {
          [Op.or]: [
            {
              name: { [Op.iLike]: `%${paginationOptions.searchText}%` }
            }
          ]
        }
      },
      ...paginationOptions
    })
  }

  findOne(id: string) {
    return this.institutionModel.findByPk(id)
  }

  update(id: string, updateInstutitionDto: UpdateInstutitionDto) {
    return this.institutionModel.update(
      { ...updateInstutitionDto },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.institutionModel.destroy({
      where: { id }
    })
  }

  addFeaturedArtist(
    institutionId: string,
    addFeaturedArtistDto: AddFeaturedPlayArtistDto
  ): Promise<FeaturedInstitutionArtistContribution> {
    return this.featuredArtistsModel.create({
      institutionId,
      ...addFeaturedArtistDto
    })
  }

  removeFeaturedArtist(institutionId: string, artistId: string) {
    return this.featuredArtistsModel.destroy({
      where: {
        institutionId,
        artistId
      }
    })
  }

  addFeaturedProduction(
    institutionId: string,
    addFeaturedProductionDto: AddFeaturedPlayProductionDto
  ): Promise<FeaturedInstitutionProduction> {
    return this.featuredProductionsModel.create({
      institutionId,
      ...addFeaturedProductionDto
    })
  }

  removeFeaturedProduction(institutionId: string, productionId: string) {
    return this.featuredProductionsModel.destroy({
      where: {
        institutionId,
        productionId
      }
    })
  }
}
