import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
<<<<<<< HEAD
import { AdultoMayorService } from '../src/services/adulto-mayor.service';
=======
import { AdultoMayorService } from '../services/adulto-mayor.service';
>>>>>>> frontend
import { AdultoMayor } from '../models/adulto_mayor.entity';
import { CreateAdultoMayorDto } from '../dto/adulto-mayor/create-am.dto';
import { UpdateAdultoMayorDto } from 'dto/adulto-mayor/update-am.dto';

describe('AdultoMayorService', () => {
    let service: AdultoMayorService;
    let repositoryMock: any;
    let createAdultoMayorDto: CreateAdultoMayorDto;
    let updateAdultoMayorDto: UpdateAdultoMayorDto;

    beforeEach(async () => {
        createAdultoMayorDto = {
<<<<<<< HEAD
            nombres: 'John',
            apellidos: 'Doe',
=======
            nombre: 'John Doe',
>>>>>>> frontend
            fecha_nac: new Date('1990-01-01'),
            sexo: true,
            dni: '12345678',
            seguro: true,
        };

        updateAdultoMayorDto = {
<<<<<<< HEAD
=======
            nombre: 'Jonh Suh',
>>>>>>> frontend
            seguro: false,
        };

        repositoryMock = {
            create: jest.fn().mockReturnValue(createAdultoMayorDto),
            save: jest.fn().mockResolvedValue(createAdultoMayorDto),
            findOneById: jest.fn().mockResolvedValue(createAdultoMayorDto),
            merge: jest.fn().mockReturnValue(updateAdultoMayorDto),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
            find: jest.fn().mockResolvedValue([createAdultoMayorDto]),
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

    describe('update', () => {
        it('should update an existing adulto mayor', async () => {
            await expect(
                service.update(1, updateAdultoMayorDto),
            ).resolves.not.toThrow();
        });

        it('should throw a NotFoundException if no adulto mayor is found', async () => {
            repositoryMock.findOneById.mockResolvedValueOnce(null);
            await expect(
                service.update(99, updateAdultoMayorDto),
            ).rejects.toThrow(NotFoundException);
        });
    });

    describe('delete', () => {
        it('should delete an adulto mayor', async () => {
            await expect(service.delete(1)).resolves.not.toThrow();
        });

        it('should throw a NotFoundException if no adulto mayor is deleted', async () => {
            repositoryMock.delete.mockResolvedValueOnce({ affected: 0 });
            await expect(service.delete(99)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findById', () => {
        it('should return an adulto mayor by ID', async () => {
            await expect(service.findById(1)).resolves.toBe(
                createAdultoMayorDto,
            );
        });

        it('should throw a NotFoundException if no adulto mayor is found', async () => {
            repositoryMock.findOneById.mockResolvedValueOnce(null);
            await expect(service.findById(99)).rejects.toThrow(
                NotFoundException,
            );
        });
    });

    describe('findAll', () => {
        it('should return all adultos mayores', async () => {
            await expect(service.findAll()).resolves.toBeInstanceOf(Array);
            await expect(service.findAll()).resolves.toHaveLength(1);
            await expect(service.findAll()).resolves.toEqual([
                createAdultoMayorDto,
            ]);
        });
    });
});
