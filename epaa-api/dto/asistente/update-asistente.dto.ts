import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateAsistenteDto {
    @IsString()
    @IsNotEmpty()
    foto_perfil: string;
}
