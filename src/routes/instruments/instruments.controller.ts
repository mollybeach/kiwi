import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { InstrumentsService } from './instruments.service'
import { CreateInstrumentDto } from './dto/create-instrument.dto'
import { UpdateInstrumentDto } from './dto/update-instrument.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('instruments')
@ApiTags('Instruments')
export class InstrumentsController {
  constructor(private readonly instrumentsService: InstrumentsService) {}

  @Post()
  create(@Body() createInstrumentDto: CreateInstrumentDto) {
    return this.instrumentsService.create(createInstrumentDto)
  }

  @Get()
  findAll() {
    return this.instrumentsService.findAll()
  }

  @Get('import')
  bulkImport() {
    return this.instrumentsService.bulkImport()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.instrumentsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInstrumentDto: UpdateInstrumentDto
  ) {
    return this.instrumentsService.update(id, updateInstrumentDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.instrumentsService.remove(id)
  }
}
