import { Inject, Injectable } from '@nestjs/common'
import { CreateOrchestrationBookDto } from './dto/create-orchestration-book.dto'
import { UpdateOrchestrationBookDto } from './dto/update-orchestration-book.dto'
import { OrchestrationBook } from './entities/orchestration-book.entity'
import { Instrument } from '../../../instruments/entities/instrument.entity'

@Injectable()
export class OrchestrationBooksService {
  constructor(
    @Inject('ORCHESTRATION_BOOKS_REPOSITORY')
    private orchestrationBookModel: typeof OrchestrationBook
  ) {}
  async create(createOrchestrationBookDto: CreateOrchestrationBookDto) {
    const orchestrationBook = await this.orchestrationBookModel.create({
      ...createOrchestrationBookDto
    })
    await orchestrationBook.$add(
      'instruments',
      createOrchestrationBookDto.instrumentIds
    )
    return this.findOne(orchestrationBook.id)
  }

  findAll(playOrchestrationId: string) {
    return this.orchestrationBookModel.findAll<OrchestrationBook>({
      where: { playOrchestrationId }
    })
  }

  findOne(id: string) {
    return this.orchestrationBookModel.findByPk<OrchestrationBook>(id, {
      include: [Instrument]
    })
  }

  update(id: string, updateOrchestrationBookDto: UpdateOrchestrationBookDto) {
    return this.orchestrationBookModel.update(
      { ...updateOrchestrationBookDto },
      { where: { id } }
    )
  }

  remove(id: string) {
    return this.orchestrationBookModel.destroy({
      where: { id }
    })
  }

  async addInstrument(orchestrationBookId: string, instrumentId: string) {
    const book = await this.orchestrationBookModel.findByPk<OrchestrationBook>(
      orchestrationBookId
    )
    return book.$add('instruments', instrumentId)
  }

  async removeInstrument(orchestrationBookId: string, instrumentId: string) {
    const book = await this.orchestrationBookModel.findByPk<OrchestrationBook>(
      orchestrationBookId
    )
    return book.$remove('instruments', instrumentId)
  }
}
