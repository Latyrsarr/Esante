import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';
import { Medecin } from './medecin.entity';

@Entity('Rdv')
export class Rdv {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_patient: number;

  @ManyToOne(() => Patient, patient => patient.rdvs, { eager: true })
  @JoinColumn({ name: 'id_patient' })
  patient: Patient;

  @Column()
  id_medecin: number;

  @ManyToOne(() => Medecin, medecin => medecin.rdvs, { eager: true })
  @JoinColumn({ name: 'id_medecin' })
  medecin: Medecin;

  @Column()
  date: string;

  @Column()
  heure: string;

  @Column()
  statut: string;

  @Column()
  motif: string;
}
