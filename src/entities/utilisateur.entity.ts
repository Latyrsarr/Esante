import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Utilisateurs' })
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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
}
