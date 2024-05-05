import { IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateAdultoMayorDto {
    @IsString()
    readonly nombre: string;

    @IsDate()
    readonly fecha_nac: Date;

    @IsBoolean()
    readonly sexo: boolean;

    @IsString()
    readonly dni: string;

    @IsBoolean()
    readonly seguro: boolean;
}
