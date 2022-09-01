import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { ProductionContributionsService } from './production-contributions.service'
import { CreateProductionContributionDto } from './dto/create-production-contribution.dto'
import { UpdateProductionContributionDto } from './dto/update-production-contribution.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('productions/:productionId/contributions')
@ApiTags('Production Contributions')
export class ProductionContributionsController {
  constructor(
    private readonly productionContributionsService: ProductionContributionsService
  ) {}

  @Post()
  create(
    @Param('productionId') productionId: string,
    @Body() createProductionContributionDto: CreateProductionContributionDto
  ) {
    return this.productionContributionsService.create(
      productionId,
      createProductionContributionDto
    )
  }

  @Get()
  findAll(@Param('productionId') productionId: string) {
    return this.productionContributionsService.findAll(productionId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionContributionsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductionContributionDto: UpdateProductionContributionDto
  ) {
    return this.productionContributionsService.update(
      id,
      updateProductionContributionDto
    )
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionContributionsService.remove(id)
  }
}
