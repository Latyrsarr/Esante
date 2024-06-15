import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Utilisateur)
  @JoinColumn()
  utilisateur: Utilisateur;

  @Column()
  sexe: string;

  @Column()
  age: number;

  @Column('decimal', { precision: 5, scale: 2 })
  taille: number;

  @Column('decimal', { precision: 5, scale: 2 })
  poids: number;

  @Column()
  groupeSanguin: string;

  @Column('text')
  allergies: string;

  @Column('text')
  antecedentsMedicaux: string;

  @Column('text')
  antecedentsFamiliaux: string;

  @Column('text')
  vaccinations: string;
}
