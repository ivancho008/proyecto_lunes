import { Injectable } from '@nestjs/common';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { Developer } from './entities/developer.entity';

@Injectable()
export class DevelopersService {
  private developers: Developer[] = [
    { id: 1, nombre: 'Iván Yate', rol: 'Frontend' },
    { id: 2, nombre: 'Alejandro Quintero', rol: 'UX/UI' },
    {id: 3, nombre: 'juan esteban gonzalez', rol: 'base de datos'},
  ];

  create(createDeveloperDto: CreateDeveloperDto) {
    const newDev: Developer = {
      id: this.developers.length + 1,
      ...createDeveloperDto,
    };
    this.developers.push(newDev);
    return newDev;
  }

  findAll() {
    return this.developers;
  }

  findOne(id: number) {
    return this.developers.find(dev => dev.id === id);
  }

  update(id: number, updateDeveloperDto: UpdateDeveloperDto) {
    const dev = this.findOne(id);
    if (!dev) return null;
    Object.assign(dev, updateDeveloperDto);
    return dev;
  }

  remove(id: number) {
    const index = this.developers.findIndex(dev => dev.id === id);
    if (index === -1) return null;
    const deleted = this.developers[index];
    this.developers.splice(index, 1);
    return deleted;
  }
}
