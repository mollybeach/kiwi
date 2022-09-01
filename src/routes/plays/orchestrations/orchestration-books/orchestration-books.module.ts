import { Module } from '@nestjs/common'
import { OrchestrationBooksService } from './orchestration-books.service'
import { OrchestrationBooksController } from './orchestration-books.controller'
import { orchestrationBooksProviders } from './orchestration-books.providers'

@Module({
  controllers: [OrchestrationBooksController],
  providers: [OrchestrationBooksService, ...orchestrationBooksProviders]
})
export class OrchestrationBooksModule {}
