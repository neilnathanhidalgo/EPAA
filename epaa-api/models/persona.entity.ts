import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    TableInheritance,
} from 'typeorm';

@Entity({ name: 'persona', schema: 'epaa' })
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Persona {
    @PrimaryGeneratedColumn()
    id_persona: number;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    fecha_nac: Date;

    @Column({ type: 'varchar', length: 8 })
    dni: string;

    @Column()
    sexo: boolean;

    @Column()
    foto_perfil: string;
}
