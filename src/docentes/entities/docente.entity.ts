import { Cargo, Etnia, Sexo } from "src/relaciones/relaciones.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ schema: 'docentes', name: 'docente' })
export class Docente {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', length: 60 })
  nombres!: string;

  @Column({ type: 'varchar', length: 60 })
  apellidos!: string;

  @Column({ type: 'varchar', length: 40, nullable: true })
  email?: string

  @Column({ type: 'text', nullable: true })
  direccion?: string

  @Column({ type: 'varchar', length: 30, nullable: true })
  cedula?: string

  @Column({ type: 'varchar', length: 10, nullable: true })
  telefono?: string

  @Column({ type: 'integer', nullable: false })
  etnia_id!: number

  @Column({ type: 'integer', nullable: false })
  cargo_id!: number

  @Column({ type: 'integer', nullable: false })
  sexo_id!: number

  @ManyToOne(() => Etnia)
  @JoinColumn({ name: 'etnia_id' })
  etnia!: Etnia

  @ManyToOne(() => Sexo)
  @JoinColumn({ name: 'sexo_id' })
  sexo!: Sexo

  @ManyToOne(() => Cargo)
  @JoinColumn({ name: 'cargo_id' })
  cargo!: Cargo

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at?: Date;
}