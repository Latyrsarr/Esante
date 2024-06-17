import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity'; // Assurez-vous d'importer correctement
import { Hopital } from './hopital.entity'; // Assurez-vous d'importer correctement

@Entity({ name: 'Medecin' })
export class Medecin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_utilisateur: number;

  @ManyToOne(() => Utilisateur, { eager: true })
  @JoinColumn({ name: 'id_utilisateur' })
  utilisateur: Utilisateur;

  @Column()
  specialite: string;

  @Column()
  ville: string;

  @Column()
  id_hopital: number;

  @ManyToOne(() => Hopital, { eager: true })
  @JoinColumn({ name: 'id_hopital' })
  hopital: Hopital;
}
