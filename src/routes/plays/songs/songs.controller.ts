import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Patch
} from '@nestjs/common'
import { SongsService } from './songs.service'
import { CreateSongDto } from './dto/create-song.dto'
import { UpdateSongDto } from './dto/update-song.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('/plays/:playId/songs')
@ApiTags('Play Songs')
export class SongsController {
  constructor(private readonly playSongsService: SongsService) {}

  @Post()
  create(
    @Param('playId') playId: string,
    @Body() createSongDto: CreateSongDto
  ) {
    return this.playSongsService.create(playId, createSongDto)
  }

  @Get()
  findAll(@Param('playId') playId: string) {
    return this.playSongsService.findAll(playId)
  }

  @Get(':songId')
  findOne(@Param('songId') songId: string) {
    return this.playSongsService.findOne(songId)
  }

  @Put(':songId')
  update(
    @Param('songId') songId: string,
    @Body() updateSongDto: UpdateSongDto
  ) {
    return this.playSongsService.update(songId, updateSongDto)
  }

  @Delete(':songId')
  remove(@Param('songId') songId: string) {
    return this.playSongsService.remove(songId)
  }

  @Patch(':songId/characters/:characterId')
  addCharacter(
    @Param('songId') songId: string,
    @Param('characterId') characterId: string
  ) {
    return this.playSongsService.addCharacter(songId, characterId)
  }

  @Delete(':songId/characters/:characterId')
  removeCharacter(
    @Param('songId') songId: string,
    @Param('characterId') characterId: string
  ) {
    return this.playSongsService.removeCharacter(songId, characterId)
  }
}
