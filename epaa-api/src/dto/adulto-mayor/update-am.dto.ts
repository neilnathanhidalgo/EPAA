import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class UpdateAdultoMayorDto {
    @IsBoolean()
    @IsNotEmpty()
    seguro?: boolean;

    @IsString()
    @IsNotEmpty()
    foto_perfil?: string;
}
