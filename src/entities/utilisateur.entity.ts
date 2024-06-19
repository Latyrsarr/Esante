import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Medecin } from './medecin.entity';

@Entity({ name: 'Utilisateurs' })
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  motDePasse: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;

  @Column()
  status: string;

  @OneToMany(() => Medecin, medecin => medecin.utilisateur)
  medecins: Medecin[];
}
