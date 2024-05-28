import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdultoMayor } from '../models/adulto_mayor.entity';
import { CreateAdultoMayorDto } from '../dto/adulto-mayor/create-am.dto';
import { UpdateAdultoMayorDto } from '../dto/adulto-mayor/update-am.dto';

@Injectable()
export class AdultoMayorService {
    constructor(
        @InjectRepository(AdultoMayor)
        private readonly adultoMayorRepository: Repository<AdultoMayor>,
    ) {}

    async create(
        createAdultoMayorDto: CreateAdultoMayorDto,
    ): Promise<AdultoMayor> {
        const newAdultoMayor =
            this.adultoMayorRepository.create(createAdultoMayorDto);
        return await this.adultoMayorRepository.save(newAdultoMayor);
    }

    async update(
        id: number,
        updateAdultoMayorDto: UpdateAdultoMayorDto,
    ): Promise<AdultoMayor> {
        const adultoMayor = await this.adultoMayorRepository.findOne({
            where: { id_adulto_mayor: id },
        });
        if (!adultoMayor) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }

        this.adultoMayorRepository.merge(adultoMayor, updateAdultoMayorDto);
        return await this.adultoMayorRepository.save(adultoMayor);
    }

    async delete(id: number): Promise<void> {
        const result = await this.adultoMayorRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }
    }

    async findById(id: number): Promise<AdultoMayor> {
        const adultoMayor = await this.adultoMayorRepository.findOne({
            where: { id_adulto_mayor: id },
        });
        if (!adultoMayor) {
            throw new NotFoundException('Adulto mayor no encontrado');
        }
        return adultoMayor;
    }

    async findAll(): Promise<AdultoMayor[]> {
        return await this.adultoMayorRepository.find();
    }
}
