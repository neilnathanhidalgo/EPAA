import { Controller, Get } from '@nestjs/common';
<<<<<<< HEAD
=======
import { InjectRepository } from '@nestjs/typeorm';
>>>>>>> frontend
import { AppService } from './app.service';

@Controller()
export class AppController {
<<<<<<< HEAD
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
=======
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
>>>>>>> frontend
}
