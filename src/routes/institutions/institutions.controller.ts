import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query
} from '@nestjs/common'
import { InstitutionsService } from './institutions.service'
import { CreateInstitutionDto } from './dto/create-institution.dto'
import { UpdateInstutitionDto } from './dto/update-instutition.dto'
import { ApiTags } from '@nestjs/swagger'
import { AddFeaturedInstitutionProductionDto } from './dto/add-featured-production.dto'
import { AddFeaturedInstitutionArtistDto } from './dto/add-featured-artist.dto'

@Controller('institutions')
@ApiTags('Institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Post()
  create(@Body() createInstitutionDto: CreateInstitutionDto) {
    return this.institutionsService.create(createInstitutionDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.institutionsService.findAll({
      currentPage,
      pageLimit,
      searchText
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.institutionsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstutitionDto
  ) {
    return this.institutionsService.update(id, updateInstitutionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.institutionsService.remove(id)
  }

  @Post(':id/featured/artist')
  addFeaturedArtist(
    @Param('id') id: string,
    @Body() addFeaturedArtistDto: AddFeaturedInstitutionArtistDto
  ) {
    return this.institutionsService.addFeaturedArtist(id, addFeaturedArtistDto)
  }

  @Delete(':id/featured/artist/:artistId')
  removeFeaturedArtist(
    @Param('id') id: string,
    @Param('artistId') artistId: string
  ) {
    return this.institutionsService.removeFeaturedArtist(id, artistId)
  }

  @Post(':id/featured/production')
  addFeaturedProduction(
    @Param('id') id: string,
    @Body() addFeaturedProductionDto: AddFeaturedInstitutionProductionDto
  ) {
    return this.institutionsService.addFeaturedProduction(
      id,
      addFeaturedProductionDto
    )
  }

  @Delete(':id/featured/production/:productionId')
  removeFeaturedProduction(
    @Param('id') id: string,
    @Param('productionId') productionId: string
  ) {
    return this.institutionsService.removeFeaturedProduction(id, productionId)
  }
}
