import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { DatabaseModule } from './config/database.module';
import { AsistenteController } from './controllers/asistente.controller';
import { AsistenteService } from './services/asistente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistente } from './models/asistente.entity';
import { AdultoMayorController } from './controllers/adulto-mayor.controller';
import { AdultoMayorService } from './services/adulto-mayor.service';
import { AdultoMayor } from './models/adulto_mayor.entity';

@Module({
    imports: [
        DatabaseModule,
        TypeOrmModule.forFeature([Asistente, AdultoMayor]),
    ],
    controllers: [AppController, AsistenteController, AdultoMayorController],
    providers: [AppService, AsistenteService, AdultoMayorService],
=======
import { DatabaseModule } from 'config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
>>>>>>> frontend
})
export class AppModule {}
