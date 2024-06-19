import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Hopital } from './hopital.entity';

@Entity({ name: 'Medecin' })
export class Medecin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_utilisateur: number;

  @ManyToOne(() => Utilisateur, utilisateur => utilisateur.medecins, { eager: true })
  @JoinColumn({ name: 'id_utilisateur' })
  utilisateur: Utilisateur;

  @Column()
  specialite: string;

  @Column()
  ville: string;

  @Column()
  id_hopital: number;

  @ManyToOne(() => Hopital, hopital => hopital.medecins, { eager: true })
  @JoinColumn({ name: 'id_hopital' })
  hopital: Hopital;
}
