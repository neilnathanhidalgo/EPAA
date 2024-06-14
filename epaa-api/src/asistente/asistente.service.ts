import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistente } from './asistente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenteService {
  constructor(
    @InjectRepository(Asistente)
    private asistenteRepository: Repository<Asistente>,
  ) {}

  findAll(): Promise<Asistente[]> {
    return this.asistenteRepository.find();
  }

  findOne(id: number): Promise<Asistente> {
    return this.asistenteRepository.findOneBy({ id_asistente: id });
  }

  create(asistente: Asistente): Promise<Asistente> {
    return this.asistenteRepository.save(asistente);
  }

  async remove(id: number): Promise<void> {
    await this.asistenteRepository.delete(id);
  }
}
