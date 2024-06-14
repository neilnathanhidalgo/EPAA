import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { Asistente } from './asistente.entity';

@Controller('asistente')
export class AsistenteController {
  constructor(private readonly asistenteService: AsistenteService) {}

  @Get()
  findAll(): Promise<Asistente[]> {
    return this.asistenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Asistente> {
    return this.asistenteService.findOne(Number(id));
  }

  @Post()
  create(@Body() asistente: Asistente): Promise<Asistente> {
    return this.asistenteService.create(asistente);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.asistenteService.remove(Number(id));
  }
}
