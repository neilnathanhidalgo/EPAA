import {
    IsString,
    IsBoolean,
    IsDate,
    IsNotEmpty,
    IsOptional,
} from 'class-validator';

export class CreateAdultoMayorDto {
    @IsString()
    @IsNotEmpty()
    nombres: string;

    @IsString()
    @IsNotEmpty()
    apellidos: string;

    @IsDate()
    @IsNotEmpty()
    fecha_nac: Date;

    @IsString()
    @IsNotEmpty()
    dni: string;

    @IsString()
    @IsNotEmpty()
    sexo: string;

    @IsBoolean()
    @IsOptional()
    seguro: boolean;

    @IsString()
    @IsOptional()
    foto_perfil?: string;
}
