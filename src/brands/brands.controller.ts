import { BrandsService } from './brands.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';


@Controller('brands')
export class BrandsController {
  
  constructor(
    private brandsService: BrandsService
  ){}

  @Post()
  create() {
    return "aqui se va a generar las brands";
  }

@Get()
findAll() {
  return this.brandsService.findAll();
}


  

  //consultar un resource por id
  //una brand

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `aqui se consulta la brand cuyo id es:
    ${id}`;
  }

    @Patch(':id')
    update(@Param('id') id: string) {
      return "aqui se actualizara" +
              "la brand con id: " + id;
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return "aqui se borrara" +
              "la brand con id: " + id;
    }
  }
