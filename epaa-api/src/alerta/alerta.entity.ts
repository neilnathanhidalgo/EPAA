import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Alerta {
  @PrimaryGeneratedColumn()
  id_alerta: number;

  @Column()
  tipo: string;

  @Column()
  atendida: string;
}
