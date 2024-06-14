import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistente } from './asistente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asistente])],
  providers: [AsistenteService],
  controllers: [AsistenteController],
})
export class AsistenteModule {}
