import { Inject, Injectable } from '@nestjs/common'
import { CreatePlayContributionDto } from './dto/create-play-contribution.dto'
import { UpdatePlayContributionDto } from './dto/update-play-contribution.dto'
import { PlayContribution } from './entities/play-contribution.entity'

@Injectable()
export class PlayContributionsService {
  constructor(
    @Inject('PLAY_CONTRIBUTIONS_REPOSITORY')
    private playContributionsModel: typeof PlayContribution
  ) {}

  create(playId: string, createPlayContributionDto: CreatePlayContributionDto) {
    return this.playContributionsModel.create({
      playId,
      ...createPlayContributionDto
    })
  }

  findAll(playId: string): Promise<PlayContribution[]> {
    return this.playContributionsModel.findAll<PlayContribution>({
      where: { playId }
    })
  }

  findOne(id: string): Promise<PlayContribution> {
    return this.playContributionsModel.findByPk<PlayContribution>(id)
  }

  update(id: string, updatePlayContributionDto: UpdatePlayContributionDto) {
    return this.playContributionsModel.update(
      { ...updatePlayContributionDto },
      { where: { id } }
    )
  }

  remove(id: string) {
    return this.playContributionsModel.destroy({
      where: { id }
    })
  }
}
