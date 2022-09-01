import { PartialType } from '@nestjs/swagger'
import { CreateInstitutionDto } from './create-institution.dto'

export class UpdateInstutitionDto extends PartialType(CreateInstitutionDto) {}
