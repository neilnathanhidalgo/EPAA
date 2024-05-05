import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdultoMayorService } from '../services/adulto-mayor.service';
import { AdultoMayor } from '../models/adulto_mayor.entity';
import { CreateAdultoMayorDto } from '../dto/adulto-mayor/create-am.dto';

describe('AdultoMayorService', () => {
    let service: AdultoMayorService;
    let repositoryMock: any;
    let createAdultoMayorDto: CreateAdultoMayorDto;

    beforeEach(async () => {
        createAdultoMayorDto = {
            nombre: 'John Doe',
            fecha_nac: new Date('1990-01-01'),
            sexo: true,
            dni: '12345678',
            seguro: true,
        };

        repositoryMock = {
            create: jest.fn().mockReturnValue(createAdultoMayorDto),
            save: jest.fn().mockReturnValue(createAdultoMayorDto),
        };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AdultoMayorService,
                {
                    provide: getRepositoryToken(AdultoMayor),
                    useValue: repositoryMock,
                },
            ],
        }).compile();

        service = module.get<AdultoMayorService>(AdultoMayorService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a new adulto mayor', async () => {
            await expect(
                service.create(createAdultoMayorDto),
            ).resolves.not.toThrow();
        });
    });
});
