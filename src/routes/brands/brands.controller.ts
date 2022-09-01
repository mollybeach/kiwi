import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common'
import { BrandsService } from './brands.service'
import { CreateBrandDto } from './dto/create-brand.dto'
import { UpdateBrandDto } from './dto/update-brand.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('brands')
@ApiTags('Brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() createBrandDto: CreateBrandDto) {
    console.log(createBrandDto)
    return this.brandsService.create(createBrandDto)
  }

  @Get()
  findAll() {
    return this.brandsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.brandsService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandsService.update(id, updateBrandDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.brandsService.remove(id)
  }
}
