import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Persona } from './persona.entity';

@Entity()
export class Asistente {
    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @PrimaryGeneratedColumn()
    id_adulto_mayor: number;
}
