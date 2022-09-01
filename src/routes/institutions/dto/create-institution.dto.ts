import { ApiProperty } from '@nestjs/swagger'
import { InstitutionType } from '../entities/institution.entity'

export class CreateInstitutionDto {
  @ApiProperty()
  type: InstitutionType

  @ApiProperty()
  name: string

  @ApiProperty()
  street?: string

  @ApiProperty()
  city?: string

  @ApiProperty()
  state?: string

  @ApiProperty()
  zipcode?: string

  @ApiProperty()
  website?: string
}
