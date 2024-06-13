import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id_persona: number;

    @Column()
    nombre: string;

    @Column()
    fecha_nac: Date;

    @Column({ type: 'varchar', length: 8 })
    dni: string;

    @Column()
    sexo: boolean;
}
