import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdultoMayor } from '../models/adulto_mayor.entity';
import { CreateAdultoMayorDto } from '../dto/adulto-mayor/create-am.dto';

@Injectable()
export class AdultoMayorService {
    constructor(
        @InjectRepository(AdultoMayor)
        private readonly adultoMayorRepository: Repository<AdultoMayor>,
    ) {}

    async create(
        CreateAdultoMayorDto: CreateAdultoMayorDto,
    ): Promise<AdultoMayor> {
        const newAdultoMator =
            this.adultoMayorRepository.create(CreateAdultoMayorDto);
        return await this.adultoMayorRepository.save(newAdultoMator);
    }
}
