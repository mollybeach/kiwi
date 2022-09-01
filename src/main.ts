import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { Logger, PinoLogger } from 'nestjs-pino'
import { HttpExceptionFilter } from './utils/HttpExceptionFilter'
import { AllExceptionsFilter } from './utils/allExceptionFilter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: false })
  app.enableCors({
    origin: 'http://localhost:3000',
  })
  app.useGlobalPipes(new ValidationPipe())
  app.useLogger(app.get(Logger))
  // app.useGlobalFilters(new HttpExceptionFilter())

  const { httpAdapter } = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  // Swagger Docs
  const config = new DocumentBuilder()
    .setTitle('kiwi API')
    .setDescription('kiwi API documentation for Admin and Consumer web apps')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
