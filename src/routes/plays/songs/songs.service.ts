import { Inject, Injectable } from '@nestjs/common'
import { CreateSongDto } from './dto/create-song.dto'
import { UpdateSongDto } from './dto/update-song.dto'
import { Song } from './entities/song.entity'
import { Character } from '../characters/entities/character.entity'

@Injectable()
export class SongsService {
  constructor(@Inject('SONGS_REPOSITORY') private songModel: typeof Song) {}

  async create(playId: string, createSongDto: CreateSongDto): Promise<Song> {
    const song = await this.songModel.create({ playId, ...createSongDto })
    await song.$add('characters', createSongDto.characterIds)
    return this.findOne(song.id)
  }

  findAll(playId: string): Promise<Song[]> {
    return this.songModel.findAll<Song>({
      where: { playId }
    })
  }

  findOne(songId: string): Promise<Song> {
    return this.songModel.findByPk<Song>(songId, {
      include: [Character]
    })
  }

  update(songId: string, updateSongDto: UpdateSongDto) {
    return this.songModel.update(
      { ...updateSongDto },
      { where: { id: songId } }
    )
  }

  remove(songId: string) {
    return this.songModel.destroy({
      where: { id: songId }
    })
  }

  async addCharacter(playSongId: string, playCharacterId: string) {
    const song = await this.songModel.findByPk<Song>(playSongId, {
      include: [Character]
    })
    return song.$add('characters', playCharacterId)
  }

  async removeCharacter(playSongId: string, playCharacterId: string) {
    const song = await this.songModel.findByPk<Song>(playSongId, {
      include: [Character]
    })
    return song.$remove('characters', playCharacterId)
  }
}
