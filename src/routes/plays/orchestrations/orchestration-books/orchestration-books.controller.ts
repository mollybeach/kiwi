import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put
} from '@nestjs/common'
import { OrchestrationBooksService } from './orchestration-books.service'
import { CreateOrchestrationBookDto } from './dto/create-orchestration-book.dto'
import { UpdateOrchestrationBookDto } from './dto/update-orchestration-book.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('/plays/:playId/orchestrations/:orchestrationId/books')
@ApiTags('Play Orchestration Books')
export class OrchestrationBooksController {
  constructor(
    private readonly orchestrationBooksService: OrchestrationBooksService
  ) {}

  @Post()
  create(
    @Param('playId') playId: string,
    @Param('orchestrationId') orchestrationId: string,
    @Body() createOrchestrationBookDto: CreateOrchestrationBookDto
  ) {
    return this.orchestrationBooksService.create(createOrchestrationBookDto)
  }

  @Get()
  findAll(
    @Param('playId') playId: string,
    @Param('orchestrationId') orchestrationId: string
  ) {
    return this.orchestrationBooksService.findAll(orchestrationId)
  }

  @Get(':orchestrationBookId')
  findOne(@Param('orchestrationBookId') orchestrationBookId: string) {
    return this.orchestrationBooksService.findOne(orchestrationBookId)
  }

  @Put(':orchestrationBookId')
  update(
    @Param('orchestrationBookId') orchestrationBookId: string,
    @Body() updateOrchestrationBookDto: UpdateOrchestrationBookDto
  ) {
    return this.orchestrationBooksService.update(
      orchestrationBookId,
      updateOrchestrationBookDto
    )
  }

  @Delete(':orchestrationBookId')
  remove(@Param('orchestrationBookId') orchestrationBookId: string) {
    return this.orchestrationBooksService.remove(orchestrationBookId)
  }

  @Patch(':orchestrationBookId/instruments/:instrumentId')
  addInstrument(
    @Param('orchestrationBookId') orchestrationBookId: string,
    @Param('instrumentId') instrumentId: string
  ) {
    return this.orchestrationBooksService.addInstrument(
      orchestrationBookId,
      instrumentId
    )
  }

  @Delete(':orchestrationBookId/instruments/:instrumentId')
  removeInstrument(
    @Param('orchestrationBookId') orchestrationBookId: string,
    @Param('instrumentId') instrumentId: string
  ) {
    return this.orchestrationBooksService.removeInstrument(
      orchestrationBookId,
      instrumentId
    )
  }
}
