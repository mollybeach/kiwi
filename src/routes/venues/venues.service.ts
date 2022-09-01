import { Inject, Injectable } from '@nestjs/common'
import { CreateVenueDto } from './dto/create-venue.dto'
import { UpdateVenueDto } from './dto/update-venue.dto'
import { Venue } from './entities/venue.entity'
import { Studio } from '../studios/entities/studio.entity'
import Paginator, { PaginationOptions } from '../../utils/Paginator'
import { Institution } from '../institutions/entities/institution.entity'
import { Op } from 'sequelize'

@Injectable()
export class VenuesService {
  constructor(@Inject('VENUES_REPOSITORY') private venuesModel: typeof Venue) {}
  create(createVenueDto: CreateVenueDto): Promise<Venue> {
    return this.venuesModel.create({ ...createVenueDto })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Venue)
    return paginator.paginate({
      options: {
        include: [Studio],
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

  findOne(id: string): Promise<Venue> {
    return this.venuesModel.findByPk(id, {
      include: [Studio]
    })
  }

  update(id: string, updateVenueDto: UpdateVenueDto) {
    return this.venuesModel.update(
      { ...updateVenueDto },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.venuesModel.destroy({
      where: { id }
    })
  }
}
