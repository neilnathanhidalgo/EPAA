import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asistente {
  @PrimaryGeneratedColumn()
  id_asistente: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  fecha_nac: string;

  @Column()
  dni: number;

  @Column()
  sexo: string;

  @Column({ nullable: true })
  foto_perfil?: string;
}
