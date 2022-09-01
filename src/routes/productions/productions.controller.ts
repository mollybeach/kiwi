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
import { ProductionsService } from './productions.service'
import { CreateProductionDto } from './dto/create-production.dto'
import { UpdateProductionDto } from './dto/update-production.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('productions')
@ApiTags('Productions')
export class ProductionsController {
  constructor(private readonly productionsService: ProductionsService) {}

  @Post()
  create(@Body() createProductionDto: CreateProductionDto) {
    return this.productionsService.create(createProductionDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.productionsService.findAll({
      currentPage,
      pageLimit,
      searchText
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productionsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductionDto: UpdateProductionDto
  ) {
    return this.productionsService.update(id, updateProductionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productionsService.remove(id)
  }

  // @Post(':id/featured/artist')
  // addFeaturedArtist(
  //   @Param('id') id: string,
  //   @Body() addFeaturedArtistDto: AddFeaturedProductionArtistDto
  // ) {
  //   return this.productionsService.addFeaturedArtist(id, addFeaturedArtistDto)
  // }
  //
  // @Delete(':id/featured/artist/:artistId')
  // removeFeaturedArtist(
  //   @Param('id') id: string,
  //   @Param('artistId') artistId: string
  // ) {
  //   return this.productionsService.removeFeaturedArtist(id, artistId)
  // }
}
