import { Module } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { DocentesController } from './docentes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Docente } from './entities/docente.entity';
import { Sexo, Etnia, Cargo } from 'src/relaciones/relaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Docente, Sexo, Etnia, Cargo])],
  controllers: [DocentesController],
  providers: [DocentesService],
})
export class DocentesModule { }