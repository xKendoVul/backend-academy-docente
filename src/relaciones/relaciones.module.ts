import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cargo, Etnia, Sexo } from "./relaciones.entity";
import { CargoController, EtniaController, SexoController } from "./relaciones.controller";
import { RelacionesService } from "./relaciones.service";

@Module({
  imports: [TypeOrmModule.forFeature([Sexo, Etnia, Cargo])],
  controllers: [SexoController, EtniaController, CargoController],
  providers: [RelacionesService],
  exports: [TypeOrmModule]
})
export class RelacionesModule { }