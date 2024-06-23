import { Module } from '@nestjs/common';
import { AlertaController } from './alerta.controller';
import { AlertaService } from './alerta.service';
import { Alerta } from './alerta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Alerta])],
  controllers: [AlertaController],
  providers: [AlertaService],
})
export class AlertaModule {}
