import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import { Persona } from './persona.entity';

@Entity()
export class AdultoMayor {
    @OneToOne(() => Persona)
    @JoinColumn()
    persona: Persona;

    @PrimaryGeneratedColumn()
    id_adulto_mayor: number;

    @Column()
    seguro: boolean;
}
