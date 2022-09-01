import { Module } from '@nestjs/common'
import { CharactersService } from './characters.service'
import { CharactersController } from './characters.controller'
import { charactersProviders } from './characters.providers'

@Module({
  controllers: [CharactersController],
  providers: [CharactersService, ...charactersProviders]
})
export class CharactersModule {}
