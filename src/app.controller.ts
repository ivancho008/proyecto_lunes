import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cars')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSaludo(): string {
    const nombre: string = "Pablo Bernal";
    return `hola este es el response para:
    ${ nombre}`
  }
}
