import { Injectable, NotFoundException } from '@nestjs/common';
import { Alerta } from './alerta.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AlertaService {
  constructor(
    @InjectRepository(Alerta)
    private alertaRepository: Repository<Alerta>,
  ) {}

  findAll(): Promise<Alerta[]> {
    return this.alertaRepository.find();
  }

  findOne(id: number): Promise<Alerta> {
    return this.alertaRepository.findOneBy({ id_alerta: id });
  }

  create(alerta: Alerta): Promise<Alerta> {
    return this.alertaRepository.save(alerta);
  }
  async update(id: number, alerta: Partial<Alerta>): Promise<Alerta> {
    const existingAlerta = await this.alertaRepository.findOneBy({
      id_alerta: id,
    });
    if (!existingAlerta) {
      throw new NotFoundException('Alerta no encontrada.');
    }
    const updatedAlerta = this.alertaRepository.merge(existingAlerta, alerta);
    return this.alertaRepository.save(updatedAlerta);
  }

  async remove(id: number): Promise<void> {
    await this.alertaRepository.delete(id);
  }

  findByType(type: string): Promise<Alerta[]> {
    return this.alertaRepository.find({ where: { tipo: type } });
  }
  async removeByType(type: string): Promise<void> {
    await this.alertaRepository.delete({ tipo: type });
  }
  async removeAll(): Promise<void> {
    await this.alertaRepository.clear();
  }
}
