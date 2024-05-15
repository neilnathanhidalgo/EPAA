import { ChildEntity } from 'typeorm';
import { Persona } from './persona.entity';

@ChildEntity({ name: 'asistente', schema: 'epaa' })
export class Asistente extends Persona {}
