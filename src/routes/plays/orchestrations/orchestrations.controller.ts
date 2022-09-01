import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common'
import { OrchestrationsService } from './orchestrations.service'
import { CreateOrchestrationDto } from './dto/create-orchestration.dto'
import { UpdateOrchestrationDto } from './dto/update-orchestration.dto'
import { ApiTags } from '@nestjs/swagger'

@Controller('/plays/:playId/orchestrations')
@ApiTags('Play Orchestrations')
export class OrchestrationsController {
  constructor(private readonly orchestrationsService: OrchestrationsService) {}

  @Post()
  create(
    @Param('playId') playId: string,
    @Body() createOrchestrationDto: CreateOrchestrationDto
  ) {
    return this.orchestrationsService.create(playId, createOrchestrationDto)
  }

  @Get()
  findAll(@Param('playId') playId: string) {
    return this.orchestrationsService.findAll(playId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orchestrationsService.findOne(id)
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrchestrationDto: UpdateOrchestrationDto
  ) {
    return this.orchestrationsService.update(id, updateOrchestrationDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orchestrationsService.remove(id)
  }
}
