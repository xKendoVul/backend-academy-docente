import { Controller, ParseIntPipe } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto, UpdateDocenteDto } from './dto/create-docente.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) { }

  @MessagePattern({ cmd: 'crear_docente' })
  async create(@Payload() createDocenteDto: CreateDocenteDto) {
    const docente = await this.docentesService.create(createDocenteDto);
    return { data: docente, message: "Registro agregado con exito" }
  }

  @MessagePattern({ cmd: 'encontrar_todos_docentes' })
  async findAll() {
    return this.docentesService.findAll();
  }

  @MessagePattern({ cmd: 'encontrar_docente' })
  async findOne(@Payload('id', ParseIntPipe) id: number) {
    return this.docentesService.findOne(id);
  }

  @MessagePattern({ cmd: 'actualizar_docente' })
  async update(@Payload() payload: UpdateDocenteDto) {
    const { id, ...updateDto } = payload;
    return this.docentesService.update(id!, updateDto);
  }

  @MessagePattern({ cmd: 'eliminar_docente' })
  async delete(@Payload('id', ParseIntPipe) id: number) {
    return this.docentesService.delete(id);
  }
}