import { Inject, Injectable } from '@nestjs/common'
import { CreateProductionContributionDto } from './dto/create-production-contribution.dto'
import { UpdateProductionContributionDto } from './dto/update-production-contribution.dto'
import { ProductionContribution } from './entities/production-contribution.entity'
import { Artist } from '../../artists/entities/artist.entity'
import { Character } from '../../plays/characters/entities/character.entity'
import { OrchestrationBook } from '../../plays/orchestrations/orchestration-books/entities/orchestration-book.entity'

@Injectable()
export class ProductionContributionsService {
  constructor(
    @Inject('PRODUCTION_CONTRIBUTIONS_REPOSITORY')
    private productionContributionsModel: typeof ProductionContribution
  ) {}
  create(
    productionId: string,
    createProductionContributionDto: CreateProductionContributionDto
  ) {
    return this.productionContributionsModel.create({
      productionId,
      ...createProductionContributionDto
    })
  }

  findAll(productionId: string) {
    return this.productionContributionsModel.findAll<ProductionContribution>({
      where: { productionId },
      include: [Artist, Character, OrchestrationBook]
    })
  }

  findOne(id: string) {
    return this.productionContributionsModel.findByPk<ProductionContribution>(
      id,
      {
        include: [Artist, Character, OrchestrationBook]
      }
    )
  }

  update(
    id: string,
    updateProductionContributionDto: UpdateProductionContributionDto
  ) {
    return this.productionContributionsModel.update(
      { ...updateProductionContributionDto },
      { where: { id } }
    )
  }

  remove(id: string) {
    return this.productionContributionsModel.destroy({
      where: { id }
    })
  }
}
