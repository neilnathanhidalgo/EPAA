import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdultoMayorService } from '../services/adulto-mayor.service';
import { AdultoMayor } from '../models/adulto_mayor.entity';
import { CreateAdultoMayorDto } from 'dto/adulto-mayor/create-am.dto';

describe('AdultoMayorService', () => {
    let service: AdultoMayorService;
    let repositoryMock: any;

    beforeEach(async () => {
        repositoryMock = {
            create: jest.fn().mockReturnValue(CreateAdultoMayorDto),
            save: jest.fn().mockReturnValue(CreateAdultoMayorDto),
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
            const createAdultoMayorDto: CreateAdultoMayorDto = {
                nombre: 'John Doe',
                fecha_nac: new Date('1990-01-01'),
                sexo: true,
                dni: '12345678',
                seguro: true,
            };

            await expect(
                service.create(createAdultoMayorDto),
            ).resolves.not.toThrow();
            expect(repositoryMock.create).toHaveBeenCalledWith(
                createAdultoMayorDto,
            );
            expect(repositoryMock.save).toHaveBeenCalledWith(
                createAdultoMayorDto,
            );
        });
    });
});
