import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AdultoMayorService } from './adulto_mayor.service';
import { AdultoMayor } from './adulto_mayor.entity';

@Controller('adulto-mayor')
export class AdultoMayorController {
  constructor(private readonly amService: AdultoMayorService) {}

  @Get()
  findAll(): Promise<AdultoMayor[]> {
    return this.amService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AdultoMayor> {
    return this.amService.findOne(Number(id));
  }

  @Post()
  create(@Body() adulto_mayor: AdultoMayor): Promise<AdultoMayor> {
    return this.amService.create(adulto_mayor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.amService.remove(Number(id));
  }
}
