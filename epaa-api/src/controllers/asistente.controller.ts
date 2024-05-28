import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { AsistenteService } from '../services/asistente.service';
import { CreateAsistenteDto } from '../dto/asistente/create-asistente.dto';
import { UpdateAsistenteDto } from 'src/dto/asistente/update-asistente.dto';

@Controller('asistente')
export class AsistenteController {
    constructor(private readonly asistenteService: AsistenteService) {}

    @Post()
    create(@Body() createAsistenteDto: CreateAsistenteDto) {
        return this.asistenteService.create(createAsistenteDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.asistenteService.findById(id);
    }

    @Get()
    findAll() {
        return this.asistenteService.findAll();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateAsistenteDto: UpdateAsistenteDto,
    ) {
        return this.asistenteService.update(id, updateAsistenteDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.asistenteService.delete(id);
    }
}
