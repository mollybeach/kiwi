import { PartialType } from '@nestjs/swagger'
import { CreateOrchestrationBookDto } from './create-orchestration-book.dto'

export class UpdateOrchestrationBookDto extends PartialType(
  CreateOrchestrationBookDto
) {}
