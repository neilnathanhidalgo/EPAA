import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AsistenteModule } from './asistente/asistente.module';
import { AdultoMayorModule } from './adulto_mayor/adulto_mayor.module';
import { AlertaModule } from './alerta/alerta.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      schema: 'epaa',
      autoLoadEntities: true,
      synchronize: false,
    }),
    AsistenteModule,
    AdultoMayorModule,
    AlertaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
