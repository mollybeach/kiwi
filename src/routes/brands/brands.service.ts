import { Inject, Injectable } from '@nestjs/common'
import { CreateBrandDto } from './dto/create-brand.dto'
import { UpdateBrandDto } from './dto/update-brand.dto'
import { Brand } from './entities/brand.entity'
import { Play } from '../plays/entities/play.entity'

@Injectable()
export class BrandsService {
  constructor(@Inject('BRANDS_REPOSITORY') private brandsModel: typeof Brand) {}
  create(createBrandDto: CreateBrandDto) {
    return this.brandsModel.create({ ...createBrandDto })
  }

  findAll(): Promise<Brand[]> {
    return this.brandsModel.findAll()
  }

  findOne(id: string): Promise<Brand> {
    return this.brandsModel.findByPk(id, {
      include: [Play]
    })
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    return this.brandsModel.update(
      {
        ...updateBrandDto
      },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.brandsModel.destroy({
      where: { id }
    })
  }
}
