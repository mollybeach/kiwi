import { Inject, Injectable } from '@nestjs/common'
import { CreateInstrumentDto } from './dto/create-instrument.dto'
import { UpdateInstrumentDto } from './dto/update-instrument.dto'
import { Instrument } from './entities/instrument.entity'
import { instrumentsList } from './utils/instrumentsList'

@Injectable()
export class InstrumentsService {
  constructor(
    @Inject('INSTRUMENTS_REPOSITORY')
    private instrumentsModel: typeof Instrument
  ) {}
  create(createInstrumentDto: CreateInstrumentDto) {
    return this.instrumentsModel.create({
      ...createInstrumentDto
    })
  }

  findAll() {
    return this.instrumentsModel.findAll()
  }

  findOne(id: string) {
    return this.instrumentsModel.findByPk(id)
  }

  update(id: string, updateInstrumentDto: UpdateInstrumentDto) {
    return this.instrumentsModel.update(
      { ...updateInstrumentDto },
      {
        where: { id }
      }
    )
  }

  remove(id: string) {
    return this.instrumentsModel.destroy({
      where: { id }
    })
  }

  bulkImport() {
    return this.instrumentsModel.bulkCreate(instrumentsList)
  }
}
