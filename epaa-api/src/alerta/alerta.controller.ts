import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { Alerta } from './alerta.entity';

@Controller('alerta')
export class AlertaController {
  constructor(private readonly alertaService: AlertaService) {}

  @Get()
  findAll(): Promise<Alerta[]> {
    return this.alertaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Alerta> {
    return this.alertaService.findOne(Number(id));
  }

  @Post()
  create(@Body() alerta: Alerta): Promise<Alerta> {
    return this.alertaService.create(alerta);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAlertaDto: Alerta) {
    const numericId = Number(id);
    if (isNaN(numericId)) {
      throw new BadRequestException('El ID proporcionado no es válido.');
    }
    return this.alertaService.update(numericId, updateAlertaDto);
  }

  @Delete('id/:id')
  remove(@Param('id') id: string): Promise<void> {
    return this.alertaService.remove(Number(id));
  }
  @Delete('tipo/:tipo')
  removeByType(@Param('tipo') tipo: string): Promise<void> {
    return this.alertaService.removeByType(tipo);
  }

  @Get('tipo/:tipo')
  findByType(@Param('tipo') tipo: string): Promise<Alerta[]> {
    return this.alertaService.findByType(tipo);
  }

  @Delete('all')
  async removeAll(): Promise<void> {
    await this.alertaService.removeAll();
  }
}
