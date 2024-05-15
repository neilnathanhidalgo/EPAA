import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistente } from 'models/asistente.entity';
import { Repository } from 'typeorm';
import { CreateAsistenteDto } from '../dto/asistente/create-asistente.dto';
import { UpdateAsistenteDto } from '../dto/asistente/update-asistente.dto';

@Injectable()
export class AsistenteService {
    constructor(
        @InjectRepository(Asistente)
        private readonly asistenteRepository: Repository<Asistente>,
    ) {}

    async create(createAsistenteDto: CreateAsistenteDto): Promise<Asistente> {
        const newAsistente =
            this.asistenteRepository.create(createAsistenteDto);
        return await this.asistenteRepository.save(newAsistente);
    }

    async update(
        id: number,
        updateAsistenteDto: UpdateAsistenteDto,
    ): Promise<Asistente> {
        const asistente = await this.asistenteRepository.findOneById(id);
        if (!asistente) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }

        this.asistenteRepository.merge(asistente, updateAsistenteDto);
        return await this.asistenteRepository.save(asistente);
    }

    async delete(id: number): Promise<void> {
        const result = await this.asistenteRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }
    }

    async findById(id: number): Promise<Asistente> {
        const asistente = await this.asistenteRepository.findOneById(id);
        if (!asistente) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }
        return asistente;
    }

    async findAll(): Promise<Asistente[]> {
        return await this.asistenteRepository.find();
    }
}
