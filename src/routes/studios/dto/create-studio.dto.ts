import { StudioType } from '../entities/studio.entity'
import { ApiProperty } from '@nestjs/swagger'

export class CreateStudioDto {
  @ApiProperty()
  type: StudioType

  @ApiProperty()
  institutionId?: string

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
