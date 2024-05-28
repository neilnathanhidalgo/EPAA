import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Asistente } from '../src/models/asistente.entity';
import { AdultoMayor } from '../src/models/adulto_mayor.entity';
import { AsistenteService } from '../src/services/asistente.service';
import { AdultoMayorService } from '../src/services/adulto-mayor.service';
import { DatabaseModule } from '../src/config/database.module';

describe('E2E Tests', () => {
    let asistenteService: AsistenteService;
    let adultoMayorService: AdultoMayorService;
    let dataSource: DataSource;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [
                DatabaseModule,
                TypeOrmModule.forFeature([Asistente, AdultoMayor]),
            ],
            providers: [AsistenteService, AdultoMayorService],
        }).compile();

        asistenteService = module.get<AsistenteService>(AsistenteService);
        adultoMayorService = module.get<AdultoMayorService>(AdultoMayorService);
        dataSource = module.get<DataSource>(DataSource);
    });

    afterEach(async () => {
        // Limpiar la base de datos después de cada test
        await dataSource.getRepository(Asistente).delete({});
        await dataSource.getRepository(AdultoMayor).delete({});
    });

    afterAll(async () => {
        await module.close();
    });

    describe('AsistenteService', () => {
        it('should create a new Asistente', async () => {
            const asistenteDto = {
                nombres: 'Juan',
                apellidos: 'Pérez',
                fecha_nac: new Date('1980-01-01'),
                dni: '47261938',
                sexo: 'M',
                foto_perfil: null,
            };

            const result = await asistenteService.create(asistenteDto);
            expect(result).toBeDefined();
            expect(result.nombres).toEqual(asistenteDto.nombres);
        });

        it('should find an Asistente by ID', async () => {
            const asistenteDto = {
                nombres: 'Maria',
                apellidos: 'Gonzalez',
                fecha_nac: new Date('1990-05-15'),
                dni: '98765432',
                sexo: 'M',
                foto_perfil: null,
            };

            const newAsistente = await asistenteService.create(asistenteDto);
            const foundAsistente = await asistenteService.findById(
                newAsistente.id_asistente,
            );
            expect(foundAsistente).toBeDefined();
            expect(foundAsistente.nombres).toEqual(asistenteDto.nombres);
        });

        it('should update an Asistente', async () => {
            const asistenteDto = {
                nombres: 'Carlos',
                apellidos: 'Lopez',
                fecha_nac: new Date('1975-12-31'),
                dni: '56473829',
                sexo: 'M',
                foto_perfil: null,
            };

            const updateDto = {
                ...asistenteDto,
                nombres: 'Carlos Eduardo',
            };

            const newAsistente = await asistenteService.create(asistenteDto);
            await asistenteService.update(newAsistente.id_asistente, updateDto);
            const updatedAsistente = await asistenteService.findById(
                newAsistente.id_asistente,
            );

            expect(updatedAsistente.nombres).toEqual('Carlos Eduardo');
        });

        it('should delete an Asistente', async () => {
            const asistenteDto = {
                nombres: 'Luisa',
                apellidos: 'Martinez',
                fecha_nac: new Date('1985-11-23'),
                dni: '47261938',
                sexo: 'M',
                foto_perfil: null,
            };

            const newAsistente = await asistenteService.create(asistenteDto);
            await asistenteService.delete(newAsistente.id_asistente);
            await expect(
                asistenteService.findById(newAsistente.id_asistente),
            ).rejects.toThrow();
        });
    });

    describe('AdultoMayorService', () => {
        it('should create a new AdultoMayor', async () => {
            const adultoMayorDto = {
                nombres: 'Pedro',
                apellidos: 'Garcia',
                fecha_nac: new Date('1950-01-01'),
                dni: '12345678',
                sexo: 'M',
                foto_perfil: null,
                seguro: true,
            };

            const result = await adultoMayorService.create(adultoMayorDto);
            expect(result).toBeDefined();
            expect(result.nombres).toEqual(adultoMayorDto.nombres);
        });

        it('should find an AdultoMayor by ID', async () => {
            const adultoMayorDto = {
                nombres: 'Ana',
                apellidos: 'Perez',
                fecha_nac: new Date('1945-05-15'),
                dni: '87654321',
                sexo: 'M',
                foto_perfil: null,
                seguro: true,
            };

            const newAdultoMayor = await adultoMayorService.create(
                adultoMayorDto,
            );
            const foundAdultoMayor = await adultoMayorService.findById(
                newAdultoMayor.id_adulto_mayor,
            );
            expect(foundAdultoMayor).toBeDefined();
            expect(foundAdultoMayor.nombres).toEqual(adultoMayorDto.nombres);
        });

        it('should update an AdultoMayor', async () => {
            const adultoMayorDto = {
                nombres: 'Luis',
                apellidos: 'Fernandez',
                fecha_nac: new Date('1940-12-31'),
                dni: '23456789',
                sexo: 'M',
                foto_perfil: null,
                seguro: false,
            };

            const updateDto = {
                ...adultoMayorDto,
                nombres: 'Luis Antonio',
            };

            const newAdultoMayor = await adultoMayorService.create(
                adultoMayorDto,
            );
            await adultoMayorService.update(
                newAdultoMayor.id_adulto_mayor,
                updateDto,
            );
            const updatedAdultoMayor = await adultoMayorService.findById(
                newAdultoMayor.id_adulto_mayor,
            );

            expect(updatedAdultoMayor.nombres).toEqual('Luis Antonio');
        });

        it('should delete an AdultoMayor', async () => {
            const adultoMayorDto = {
                nombres: 'Marta',
                apellidos: 'Diaz',
                fecha_nac: new Date('1935-11-23'),
                dni: '34567890',
                sexo: 'M',
                foto_perfil: null,
                seguro: true,
            };

            const newAdultoMayor = await adultoMayorService.create(
                adultoMayorDto,
            );
            await adultoMayorService.delete(newAdultoMayor.id_adulto_mayor);
            await expect(
                adultoMayorService.findById(newAdultoMayor.id_adulto_mayor),
            ).rejects.toThrow();
        });
    });
});
