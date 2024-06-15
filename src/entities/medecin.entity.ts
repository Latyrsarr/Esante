import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';

@Entity()
export class Medecin {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Utilisateur)
  @JoinColumn()
  utilisateur: Utilisateur;

  @Column()
  specialite: string;

  @Column()
  ville: string;
}
