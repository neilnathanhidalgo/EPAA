import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { DatabaseModule } from '../config/database.module';
import * as dotenv from 'dotenv';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Asistente } from '../models/asistente.entity';
dotenv.config({ path: '.env' });

describe('Database E2E Tests', () => {
    let asistenteRepository: Repository<Asistente>;
    let module: TestingModule;

    beforeAll(async () => {
        try {
            module = await Test.createTestingModule({
                imports: [DatabaseModule],
            }).compile();

            asistenteRepository = module.get<Repository<Asistente>>(
                getRepositoryToken(Asistente),
            );
        } catch (error) {
            console.error('Error connecting to the database', error);
        }
    });

    it('should be able to create a new persona', async () => {
        const persona = asistenteRepository.create({
            nombres: 'John',
            apellidos: 'Doe',
            fecha_nac: new Date('1990-01-01'),
            dni: '12345678',
            sexo: true,
            foto_perfil: null,
        });

        await asistenteRepository.save(persona);
        expect(persona.id_persona).toBeDefined();
    }, 30000);

    afterAll(async () => {
        if (module) {
            try {
                await module.close();
            } catch (error) {
                console.error('Error closing the module', error);
            }
        }
    });
});
