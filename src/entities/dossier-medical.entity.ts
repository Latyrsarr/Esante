import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Patient } from './patient.entity';

@Entity()
export class DossierMedical {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Patient)
  @JoinColumn()
  patient: Patient;

  @Column('text')
  historiqueConsultations: string;

  @Column('text')
  prescriptions: string;
}
