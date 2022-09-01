import { Module } from '@nestjs/common'
import { OrchestrationsService } from './orchestrations.service'
import { OrchestrationsController } from './orchestrations.controller'
import { orchestrationsProviders } from './orchestrations.providers'
import { OrchestrationBooksModule } from './orchestration-books/orchestration-books.module'

@Module({
  controllers: [OrchestrationsController],
  providers: [OrchestrationsService, ...orchestrationsProviders],
  imports: [OrchestrationBooksModule]
})
export class OrchestrationsModule {}
