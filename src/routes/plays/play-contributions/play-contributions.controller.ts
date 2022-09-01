import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { PlayContributionsService } from './play-contributions.service'
import { CreatePlayContributionDto } from './dto/create-play-contribution.dto'
import { UpdatePlayContributionDto } from './dto/update-play-contribution.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('plays/:playId/contributions')
@ApiTags('Play Contributions')
export class PlayContributionsController {
  constructor(
    private readonly playContributionsService: PlayContributionsService
  ) {}

  @Post()
  create(
    @Param('playId') playId: string,
    @Body() createPlayContributionDto: CreatePlayContributionDto
  ) {
    return this.playContributionsService.create(
      playId,
      createPlayContributionDto
    )
  }

  @Get()
  findAll(@Param('playId') playId: string) {
    return this.playContributionsService.findAll(playId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playContributionsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayContributionDto: UpdatePlayContributionDto
  ) {
    return this.playContributionsService.update(id, updatePlayContributionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playContributionsService.remove(id)
  }
}
