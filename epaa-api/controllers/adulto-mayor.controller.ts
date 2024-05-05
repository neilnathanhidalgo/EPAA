import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    HttpStatus,
    HttpException,
} from '@nestjs/common';
import { AdultoMayorService } from '../services/adulto-mayor.service';
import { CreateAdultoMayorDto } from 'dto/adulto-mayor/create-am.dto';
import { UpdateAdultoMayorDto } from 'dto/adulto-mayor/update-am.dto';

@Controller('adulto-mayor')
export class AdultoMayorController {
    constructor(private readonly adultoMayorService: AdultoMayorService) {}

    @Post()
    async create(@Body() createAdultoMayorDto: CreateAdultoMayorDto) {
        try {
            const newAdultoMayor = await this.adultoMayorService.create(
                createAdultoMayorDto,
            );
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

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateAdultoMayorDto: UpdateAdultoMayorDto,
    ) {
        try {
            const updateAdultoMayor = await this.adultoMayorService.update(
                id,
                updateAdultoMayorDto,
            );
            return {
                message: 'Adulto mayor actualizado con éxito',
                data: updateAdultoMayor,
            };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Error updating adulto mayor',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        try {
            await this.adultoMayorService.delete(id);
            return {
                message: 'Perfil eliminado con éxito',
            };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'Error eliminando adulto mayor',
                },
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }

    @Get(':id')
    async findById(@Param('id') id: number) {
        try {
            const adultoMayor = await this.adultoMayorService.findById(id);
            return {
                message: 'Adulto mayor encontrado',
                data: adultoMayor,
            };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Adulto mayor no encontrado',
                },
                HttpStatus.NOT_FOUND,
            );
        }
    }

    @Get()
    async findAll() {
        try {
            const adultoMayor = await this.adultoMayorService.findAll();
            return {
                message: 'Adulto mayor encontrado',
                data: adultoMayor,
            };
        } catch (error) {
            throw new HttpException(
                {
                    status: HttpStatus.NOT_FOUND,
                    error: 'Adulto mayor no encontrado',
                },
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
