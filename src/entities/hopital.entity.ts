import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Medecin } from './medecin.entity';

@Entity({ name: 'Hopitaux' })
export class Hopital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;

  @OneToMany(() => Medecin, medecin => medecin.hopital)
  medecins: Medecin[];
}
