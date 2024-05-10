import {
    IsString,
    IsBoolean,
    IsDate,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

export class CreateAsistenteDto {
    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsDate()
    @IsNotEmpty()
    fecha_nac: Date;

    @IsBoolean()
    @IsNotEmpty()
    sexo: boolean;

    @IsString()
    @IsNotEmpty()
    dni: string;

    @IsString()
    @IsOptional()
    foto_perfil?: string;
}
