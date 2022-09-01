import { Module } from '@nestjs/common'
import { StudiosService } from './studios.service'
import { StudiosController } from './studios.controller'
import { studiosProviders } from './studios.providers'

@Module({
  controllers: [StudiosController],
  providers: [StudiosService, ...studiosProviders]
})
export class StudiosModule {}
