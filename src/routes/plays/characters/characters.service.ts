import { Inject, Injectable } from '@nestjs/common'
import { CreateCharacterDto } from './dto/create-character.dto'
import { UpdateCharacterDto } from './dto/update-character.dto'
import { Character } from './entities/character.entity'

@Injectable()
export class CharactersService {
  constructor(
    @Inject('CHARACTERS_REPOSITORY')
    private characterModel: typeof Character
  ) {}

  create(playId: string, createCharacterDto: CreateCharacterDto) {
    return this.characterModel.create({ playId, ...createCharacterDto })
  }

  findAll(playId: string) {
    return this.characterModel.findAll<Character>({
      where: { playId }
    })
  }

  findOne(id: string) {
    return this.characterModel.findByPk<Character>(id)
  }

  update(id: string, updateCharacterDto: UpdateCharacterDto) {
    return this.characterModel.update(
      { ...updateCharacterDto },
      { where: { id } }
    )
  }

  remove(id: string) {
    return this.characterModel.destroy({
      where: { id }
    })
  }
}
