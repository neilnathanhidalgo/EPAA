import { ChildEntity, Column } from 'typeorm';
import { Persona } from './persona.entity';

@ChildEntity()
export class AdultoMayor extends Persona {
    @Column()
    seguro: boolean;
}
