import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdultoMayor {
  @PrimaryGeneratedColumn()
  id_adulto_mayor: number;

  @Column()
  nombres: string;

  @Column()
  apellidos: string;

  @Column()
  fecha_nac: string;

  @Column()
  dni: string;

  @Column()
  sexo: string;

  @Column({ nullable: true })
  foto_perfil?: string;

  @Column()
  seguro: string;

  @Column()
  pin: string;
}
