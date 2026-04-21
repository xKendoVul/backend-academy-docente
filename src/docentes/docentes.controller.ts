import { Controller } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocenteDto, UpdateDocenteDto } from './dto/create-docente.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('docentes')
export class DocentesController {
  constructor(private readonly docentesService: DocentesService) { }

  @MessagePattern({ cmd: 'crear_docente' })
  async create(@Payload() createDocenteDto: CreateDocenteDto) {
    const docente = await this.docentesService.create(createDocenteDto);

    const datos = {
      data: docente,
      message: "Registro agregado con exito"
    }
    return datos
  }

  @MessagePattern({ cmd: 'encontrar_todos_docentes' })
  async findAll() {
    return this.docentesService.findAll();
  }

  @MessagePattern({ cmd: 'encontrar_docente' })
  async findOne(@Payload() id: number) {
    return this.docentesService.findOne(id);
  }

  @MessagePattern({ cmd: 'actualizar_docente' })
  async update(@Payload() payload: { id: number; updateDocenteDto: UpdateDocenteDto }) {
    const { id, updateDocenteDto } = payload;
    return this.docentesService.update(id, updateDocenteDto);
  }

  @MessagePattern({ cmd: 'eliminar_docente' })
  async delete(@Payload() id: number) {
    return this.docentesService.delete(id);
  }
}
