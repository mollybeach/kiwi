import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { CharactersService } from './characters.service'
import { CreateCharacterDto } from './dto/create-character.dto'
import { UpdateCharacterDto } from './dto/update-character.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('/plays/:playId/characters')
@ApiTags('Play Characters')
export class CharactersController {
  constructor(private readonly playCharactersService: CharactersService) {}

  @Post()
  create(
    @Param('playId') playId: string,
    @Body() createPlayCharacterDto: CreateCharacterDto
  ) {
    return this.playCharactersService.create(playId, createPlayCharacterDto)
  }

  @Get()
  findAll(@Param('playId') playId: string) {
    return this.playCharactersService.findAll(playId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playCharactersService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayCharacterDto: UpdateCharacterDto
  ) {
    return this.playCharactersService.update(id, updatePlayCharacterDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playCharactersService.remove(id)
  }
}
