import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteDto, UpdateDocenteDto } from './dto/create-docente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocentesService {
  constructor(
    @InjectRepository(Docente) private readonly DocenteRepo: Repository<Docente>
  ) { }

  async create(dto: CreateDocenteDto) {
    const nuevoDocente = this.DocenteRepo.create({
      nombres: dto.nombres,
      apellidos: dto.apellidos,
      email: dto.email,
      direccion: dto.direccion,
      cedula: dto.cedula,
      telefono: dto.telefono,
      etnia_id: dto.etnia_id,
      cargo_id: dto.cargo_id,
      sexo_id: dto.sexo_id
    })
    return await this.DocenteRepo.save(nuevoDocente)
  }

  async findAll() {
    return await this.DocenteRepo.find()
  }

  async findOne(id: number) {
    const docente = await this.DocenteRepo.findOne({
      where: { id }
    })
    if (!docente) {
      throw new NotFoundException(`Docente con ${id} no encontrado`);
    }
    return docente;
  }

  async update(id: number, UpdateDto: UpdateDocenteDto) {
    const docente = await this.DocenteRepo.preload({
      id: id,
      ...UpdateDto,
    });
    if (!docente)
      throw new NotFoundException(`Docente con id ${id} no encontrado`);
    return this.DocenteRepo.save(docente)
  }

  async delete(id: number) {
    const docente = await this.DocenteRepo.findOne({ where: { id } })

    if (!docente) {
      throw new NotFoundException(`Docente con id ${id} no encontrada`)
    }
    return await this.DocenteRepo.delete(id)
  }
}
