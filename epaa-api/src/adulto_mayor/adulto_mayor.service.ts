import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdultoMayor } from './adulto_mayor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdultoMayorService {
  constructor(
    @InjectRepository(AdultoMayor)
    private amRepository: Repository<AdultoMayor>,
  ) {}

  findAll(): Promise<AdultoMayor[]> {
    return this.amRepository.find();
  }

  findOne(id: number): Promise<AdultoMayor> {
    return this.amRepository.findOneBy({ id_adulto_mayor: id });
  }

  create(asistente: AdultoMayor): Promise<AdultoMayor> {
    return this.amRepository.save(asistente);
  }

  async remove(id: number): Promise<void> {
    await this.amRepository.delete(id);
  }
}
