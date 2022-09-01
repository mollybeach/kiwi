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
import { ArtistsService } from './artists.service'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('artists')
@ApiTags('Artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  create(@Body() createArtistDto: CreateArtistDto) {
    return this.artistsService.create(createArtistDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.artistsService.findAll({
      currentPage,
      pageLimit,
      searchText
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artistsService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
    return this.artistsService.update(id, updateArtistDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.artistsService.remove(id)
  }
}
