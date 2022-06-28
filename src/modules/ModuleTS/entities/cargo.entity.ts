import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { CargoType } from './cargoType.entity';
import { Transport } from './tranport.entity';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weightBefor: number;

  @Column()
  weightAfter: number;

  @Column()
  status: string;

  @ManyToOne(() => CargoType, (cargoType) => cargoType.cargo)
  cargoType: CargoType[];

  @ManyToOne(() => Transport, (TS) => TS.cargo)
  transport: Transport[];
}
