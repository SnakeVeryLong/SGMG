import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Cargo } from './cargo.entity';

@Entity()
export class CargoType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @OneToMany(() => Cargo, (cargo) => cargo.cargoType, {
    eager: true,
    cascade: true,
  })
  cargo: Cargo;
}
