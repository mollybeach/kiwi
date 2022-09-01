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
import { VenuesService } from './venues.service'
import { CreateVenueDto } from './dto/create-venue.dto'
import { UpdateVenueDto } from './dto/update-venue.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('venues')
@ApiTags('Venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venuesService.create(createVenueDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.venuesService.findAll({
      currentPage,
      pageLimit,
      searchText
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuesService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venuesService.update(id, updateVenueDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuesService.remove(id)
  }
}
