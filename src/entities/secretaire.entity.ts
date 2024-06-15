import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Medecin } from './medecin.entity';

@Entity()
export class Secretaire {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Utilisateur)
  utilisateur: Utilisateur;

  @ManyToOne(() => Medecin)
  medecin: Medecin;
}
