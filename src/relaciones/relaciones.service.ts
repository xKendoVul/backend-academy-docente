import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Cargo, Etnia, Sexo } from "./relaciones.entity";
import { CreateCargoDto, CreateEtniaDto, CreateSexoDto } from "./create-relaciones.dto";


@Injectable()
export class RelacionesService {
  constructor(
    @InjectRepository(Sexo)
    private readonly SexoRepo: Repository<Sexo>,
    @InjectRepository(Etnia)
    private readonly EtniaRepo: Repository<Etnia>,
    @InjectRepository(Cargo)
    private readonly CargoRepo: Repository<Cargo>,
  ) { }

  async createSexo(sexoDto: CreateSexoDto) {
    try {
      const sexo = this.SexoRepo.create(sexoDto);
      return await this.SexoRepo.save(sexo)
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllSexos() {
    return await this.SexoRepo.find();
  }

  async createEtnia(etniaDto: CreateEtniaDto) {
    try {
      const etnia = this.EtniaRepo.create(etniaDto)
      return await this.EtniaRepo.save(etnia)
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async findAllEtnias() {
    return await this.EtniaRepo.find();
  }

  async createCargo(cargoDto: CreateCargoDto) {
    try {
      const cargo = this.CargoRepo.create(cargoDto)
      return await this.CargoRepo.save(cargo)
    } catch (error) {
      console.log(error)
      throw error;
    }
  }

  async findAllCargos() {
    return await this.CargoRepo.find();
  }
}