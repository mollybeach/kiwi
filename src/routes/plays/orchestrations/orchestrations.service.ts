import { Inject, Injectable } from '@nestjs/common'
import { CreateOrchestrationDto } from './dto/create-orchestration.dto'
import { UpdateOrchestrationDto } from './dto/update-orchestration.dto'
import { Orchestration } from './entities/orchestration.entity'
import { OrchestrationBook } from './orchestration-books/entities/orchestration-book.entity'
import { Instrument } from '../../instruments/entities/instrument.entity'

@Injectable()
export class OrchestrationsService {
  constructor(
    @Inject('ORCHESTRATIONS_REPOSITORY')
    private orchestrationModel: typeof Orchestration
  ) {}

  create(playId: string, createOrchestrationDto: CreateOrchestrationDto) {
    return this.orchestrationModel.create({ playId, ...createOrchestrationDto })
  }

  findAll(playId: string) {
    return this.orchestrationModel.findAll<Orchestration>({
      where: { playId }
    })
  }

  findOne(id: string) {
    return this.orchestrationModel.findByPk<Orchestration>(id, {
      include: [
        {
          model: OrchestrationBook,
          include: [Instrument]
        }
      ]
    })
  }

  update(id: string, updateOrchestrationDto: UpdateOrchestrationDto) {
    return this.orchestrationModel.update(
      { ...updateOrchestrationDto },
      { where: { id } }
    )
  }

  remove(id: string) {
    return this.orchestrationModel.destroy({
      where: { id }
    })
  }
}
