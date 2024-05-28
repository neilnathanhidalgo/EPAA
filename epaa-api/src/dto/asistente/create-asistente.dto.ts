import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

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

    @IsString()
    @IsNotEmpty()
    sexo: string;

    @IsString()
    @IsNotEmpty()
    dni: string;

    @IsString()
    @IsOptional()
    foto_perfil?: string;
}
