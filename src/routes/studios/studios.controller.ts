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
import { StudiosService } from './studios.service'
import { CreateStudioDto } from './dto/create-studio.dto'
import { UpdateStudioDto } from './dto/update-studio.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Studios')
@Controller('studios')
export class StudiosController {
  constructor(private readonly studiosService: StudiosService) {}

  @Post()
  create(@Body() createStudioDto: CreateStudioDto) {
    return this.studiosService.create(createStudioDto)
  }

  @Get()
  findAll(
    @Query('searchText') searchText?: string,
    @Query('page') currentPage?: number,
    @Query('pageLimit') pageLimit?: number
  ) {
    return this.studiosService.findAll({
      currentPage,
      pageLimit,
      searchText
    })
  }

  @Get(':studioId')
  findOne(@Param('studioId') id: string) {
    return this.studiosService.findOne(id)
  }

  @Put(':studioId')
  update(
    @Param('studioId') id: string,
    @Body() updateStudioDto: UpdateStudioDto
  ) {
    return this.studiosService.update(id, updateStudioDto)
  }

  @Delete(':studioId')
  remove(@Param('studioId') id: string) {
    return this.studiosService.remove(id)
  }
}
