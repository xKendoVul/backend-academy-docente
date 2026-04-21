import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'docentes' })
export class Docente {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column({ type: 'varchar', length: 60 })
  nombres!: string;

  @Column({ type: 'varchar', length: 60 })
  apellidos!: string;

  @Column({ type: 'varchar', length: 40 })
  email?: string

  @Column({ type: 'text' })
  direccion?: string

  @Column({ type: 'varchar', length: 30 })
  cedula?: string

  @Column({ type: 'varchar', length: 10 })
  telefono?: string

  @Column({ type: 'int4' })
  etnia_id!: number

  @Column({ type: 'int4' })
  cargo_id!: number

  @Column({ type: 'int4' })
  sexo_id!: number

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at?: Date;
}
