import { IsString, IsBoolean } from 'class-validator';

export class UpdateAdultoMayorDto {
    @IsString()
    readonly nombre: string;

    @IsBoolean()
    readonly seguro: boolean;
}
