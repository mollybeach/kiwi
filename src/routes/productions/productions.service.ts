import { Inject, Injectable } from '@nestjs/common'
import { CreateProductionDto } from './dto/create-production.dto'
import { UpdateProductionDto } from './dto/update-production.dto'
import { Production } from './entities/production.entity'
import { Artist } from '../artists/entities/artist.entity'
import { ProductionContribution } from './production-contributions/entities/production-contribution.entity'
import { Play } from '../plays/entities/play.entity'
import { Institution } from '../institutions/entities/institution.entity'
import { Venue } from '../venues/entities/venue.entity'
import { Brand } from '../brands/entities/brand.entity'
import { Studio } from '../studios/entities/studio.entity'
import { Character } from '../plays/characters/entities/character.entity'
import { OrchestrationBook } from '../plays/orchestrations/orchestration-books/entities/orchestration-book.entity'
import { Op } from 'sequelize'
import Paginator, { PaginationOptions } from '../../utils/Paginator'

@Injectable()
export class ProductionsService {
  constructor(
    @Inject('PRODUCTIONS_REPOSITORY')
    private productionsModel: typeof Production
  ) {}

  create(createProductionDto: CreateProductionDto): Promise<Production> {
    return this.productionsModel.create({ ...createProductionDto })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Production)
    return paginator.paginate({
      options: {
        include: [
          {
            model: Play,
            include: [
              {
                model: Brand,
                where: {
                  name: { [Op.iLike]: `%${paginationOptions.searchText}%` }
                }
              }
            ]
          },
          Institution,
          Studio,
          Venue
        ],
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

  findOne(id: string): Promise<Production> {
    return this.productionsModel.findByPk(id, {
      include: [
        {
          model: Play,
          include: [Brand]
        },
        {
          model: ProductionContribution,
          include: [Artist, Character, OrchestrationBook]
        },
        Institution,
        Studio,
        Venue,
        {
          model: ProductionContribution,
          include: [Artist],
          as: 'contributions'
        }
      ]
    })
  }

  update(id: string, updateProductionDto: UpdateProductionDto) {
    return this.productionsModel.update(
      { ...updateProductionDto },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.productionsModel.destroy({ where: { id } })
  }
}
