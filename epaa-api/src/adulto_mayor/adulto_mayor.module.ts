import { Module } from '@nestjs/common';
import { AdultoMayorController } from './adulto_mayor.controller';
import { AdultoMayorService } from './adulto_mayor.service';
import { AdultoMayor } from './adulto_mayor.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AdultoMayor])],
  controllers: [AdultoMayorController],
  providers: [AdultoMayorService],
})
export class AdultoMayorModule {}
