import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
} from '@nestjs/common';
import { AdultoMayorService } from '../services/adulto-mayor.service';
import { CreateAdultoMayorDto } from '../dto/adulto-mayor/create-am.dto';
import { UpdateAdultoMayorDto } from 'src/dto/adulto-mayor/update-am.dto';

@Controller('adulto-mayor')
export class AdultoMayorController {
    constructor(private readonly adultoMayorService: AdultoMayorService) {}

    @Post()
    create(@Body() createAdultoMayorDto: CreateAdultoMayorDto) {
        return this.adultoMayorService.create(createAdultoMayorDto);
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.adultoMayorService.findById(id);
    }

    @Get()
    findAll() {
        return this.adultoMayorService.findAll();
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() updateAdultoMayorDto: UpdateAdultoMayorDto,
    ) {
        return this.adultoMayorService.update(id, updateAdultoMayorDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.adultoMayorService.delete(id);
    }
}
