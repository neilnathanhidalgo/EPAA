import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'adulto_mayor', schema: 'epaa' })
export class AdultoMayor {
    @PrimaryGeneratedColumn()
    id_adulto_mayor: number;

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

    @Column()
    seguro: boolean;
}
