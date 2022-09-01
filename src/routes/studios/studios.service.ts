import { Inject, Injectable } from '@nestjs/common'
import { CreateStudioDto } from './dto/create-studio.dto'
import { UpdateStudioDto } from './dto/update-studio.dto'
import { Studio } from './entities/studio.entity'
import { Institution } from '../institutions/entities/institution.entity'
import Paginator, { PaginationOptions } from '../../utils/Paginator'
import { Artist } from '../artists/entities/artist.entity'
import { Op } from 'sequelize'

@Injectable()
export class StudiosService {
  constructor(
    @Inject('STUDIOS_REPOSITORY')
    private studioModel: typeof Studio
  ) {}
  create(createStudioDto: CreateStudioDto) {
    return this.studioModel.create({ ...createStudioDto })
  }

  findAll(paginationOptions: Partial<PaginationOptions>) {
    const paginator = new Paginator(Studio)
    return paginator.paginate({
      options: {
        include: [Institution],
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
    return this.studioModel.findByPk(id, {
      include: [Institution]
    })
  }

  update(id: string, updateStudioDto: UpdateStudioDto) {
    return this.studioModel.update(
      { ...updateStudioDto },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.studioModel.destroy({
      where: { id }
    })
  }
}
