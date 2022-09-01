import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { ConfigModule } from '@nestjs/config'
import { BrandsModule } from './routes/brands/brands.module'
import { PlaysModule } from './routes/plays/plays.module'
import { ArtistsModule } from './routes/artists/artists.module'
import { InstitutionsModule } from './routes/institutions/institutions.module'
import { VenuesModule } from './routes/venues/venues.module'
import { ProductionsModule } from './routes/productions/productions.module'
import { InstrumentsModule } from './routes/instruments/instruments.module'
import { Artist } from './routes/artists/entities/artist.entity'
import { Brand } from './routes/brands/entities/brand.entity'
import { Instrument } from './routes/instruments/entities/instrument.entity'
import { FeaturedInstitutionArtistContribution } from './routes/institutions/entities/featured-institution-artist-contribution.entity'
import { FeaturedInstitutionProduction } from './routes/institutions/entities/featured-institution-production.entity'
import { Institution } from './routes/institutions/entities/institution.entity'
import { FeaturedPlayArtistContribution } from './routes/plays/entities/featured-play-artist-contribution.entity'
import { FeaturedPlayProduction } from './routes/plays/entities/featured-play-production.entity'
import { Play } from './routes/plays/entities/play.entity'
import { SongInstrument } from './routes/plays/entities/song-instrument.entity'
import { FeaturedProductionArtistContribution } from './routes/productions/entities/featured-production-artist-contribution.entity'
import { Production } from './routes/productions/entities/production.entity'
import { ProductionContribution } from './routes/productions/production-contributions/entities/production-contribution.entity'
import { Venue } from './routes/venues/entities/venue.entity'
import { Character } from './routes/plays/characters/entities/character.entity'
import { Song } from './routes/plays/songs/entities/song.entity'
import { Orchestration } from './routes/plays/orchestrations/entities/orchestration.entity'
import { PlayContribution } from './routes/plays/play-contributions/entities/play-contribution.entity'
import { OrchestrationInstrument } from './routes/plays/orchestrations/entities/orchestration-instrument.entity'
import { LoggerModule } from 'nestjs-pino'
import { OrchestrationBook } from './routes/plays/orchestrations/orchestration-books/entities/orchestration-book.entity'
import { AuthMiddleware } from './middleware/auth.middleware'
import { StudiosModule } from './routes/studios/studios.module'
import { Studio } from './routes/studios/entities/studio.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        name: 'kiwi',
        prettyPrint: {
          colorize: true,
          levelFirst: true
        },
        serializers: {
          req(req) {
            req.body = req.raw.body
            return req
          }
        }
      }
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      logging: true,
      // autoLoadModels: true,
      // synchronize: true,
      // sync: {
      //   alter: true
      // },
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [
        Artist,
        Brand,
        Instrument,
        FeaturedInstitutionArtistContribution,
        FeaturedInstitutionProduction,
        Institution,
        FeaturedPlayArtistContribution,
        FeaturedPlayProduction,
        Play,
        Character,
        PlayContribution,
        Orchestration,
        OrchestrationInstrument,
        OrchestrationBook,
        Song,
        Studio,
        SongInstrument,
        FeaturedProductionArtistContribution,
        Production,
        ProductionContribution,
        Venue
      ]
    }),
    BrandsModule,
    PlaysModule,
    ArtistsModule,
    InstitutionsModule,
    VenuesModule,
    ProductionsModule,
    InstrumentsModule,
    StudiosModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
  }
}
