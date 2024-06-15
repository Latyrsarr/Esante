import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Patient } from './patient.entity';
import { Medecin } from './medecin.entity';

@Entity()
export class Rdv {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient)
  patient: Patient;

  @ManyToOne(() => Medecin)
  medecin: Medecin;

  @Column()
  date: string;

  @Column()
  heure: string;

  @Column()
  statut: string;

  @Column('text')
  motif: string;
}

