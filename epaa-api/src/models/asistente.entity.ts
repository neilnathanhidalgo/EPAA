import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asistente', schema: 'epaa' })
export class Asistente {
    @PrimaryGeneratedColumn()
    id_asistente: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    fecha_nac: Date;

    @Column()
    dni: string;

    @Column()
    sexo: string;

    @Column()
    foto_perfil: string;
}
