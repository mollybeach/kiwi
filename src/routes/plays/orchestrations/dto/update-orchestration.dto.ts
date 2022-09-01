import { PartialType } from '@nestjs/swagger'
import { CreateOrchestrationDto } from './create-orchestration.dto'

export class UpdateOrchestrationDto extends PartialType(
  CreateOrchestrationDto
) {}
