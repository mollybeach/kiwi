import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query
} from '@nestjs/common'
import { PlaysService } from './plays.service'
import { CreatePlayDto } from './dto/create-play.dto'
import { UpdatePlayDto } from './dto/update-play.dto'
import { ApiTags } from '@nestjs/swagger'
import { AddFeaturedPlayArtistDto } from './dto/add-featured-play-artist.dto'
import { AddFeaturedPlayProductionDto } from './dto/add-featured-play-production.dto'

@Controller('plays')
@ApiTags('Plays')
export class PlaysController {
  constructor(private readonly playsService: PlaysService) {}

  @Post()
  create(@Body() createPlayDto: CreatePlayDto) {
    return this.playsService.create(createPlayDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.playsService.findAll({
      searchText,
      currentPage,
      pageLimit
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playsService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayDto: UpdatePlayDto) {
    return this.playsService.update(id, updatePlayDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playsService.remove(id)
  }

  @Get(':id/orchestration-books')
  findAllOrchestrationBooks(@Param('id') id: string) {
    return this.playsService.findAllOrchestrationBooks(id)
  }

  @Post(':id/featured/artist')
  addFeaturedArtist(
    @Param('id') id: string,
    @Body() addFeaturedArtistDto: AddFeaturedPlayArtistDto
  ) {
    return this.playsService.addFeaturedArtist(id, addFeaturedArtistDto)
  }

  @Delete(':id/featured/artist/:artistId')
  removeFeaturedArtist(
    @Param('id') id: string,
    @Param('artistId') artistId: string
  ) {
    return this.playsService.removeFeaturedArtist(id, artistId)
  }

  @Post(':id/featured/production')
  addFeaturedProduction(
    @Param('id') id: string,
    @Body() addFeaturedProductionDto: AddFeaturedPlayProductionDto
  ) {
    return this.playsService.addFeaturedProduction(id, addFeaturedProductionDto)
  }

  @Delete(':id/featured/production/:productionId')
  removeFeaturedProduction(
    @Param('id') id: string,
    @Param('productionId') productionId: string
  ) {
    return this.playsService.removeFeaturedProduction(id, productionId)
  }
}
