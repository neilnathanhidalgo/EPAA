import {
    Controller,
    Post,
    Body,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { AdultoMayorService } from '../services/adulto-mayor.service';
import { CreateAdultoMayorDto } from 'dto/adulto-mayor/create-am.dto';

@Controller('adulto-mayor')
export class AdultoMayorController {
    constructor(private readonly adultoMayorService: AdultoMayorService) {}

    @Post()
    async create(@Body() createAdultoMayorDto: CreateAdultoMayorDto) {
        try {
            const newAdultoMayor =
                await this.adultoMayorService.create(createAdultoMayorDto);
            return {
                message: 'Adulto mayor creado con éxito',
                data: newAdultoMayor,
            };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Error creating adulto mayor',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
