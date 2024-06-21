// import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
// import { Utilisateur } from './utilisateur.entity';

// @Entity()
// export class Patient {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   sexe: string;

//   @Column()
//   age: number;

//   @Column('decimal', { precision: 5, scale: 2 })
//   taille: number;

//   @Column('decimal', { precision: 5, scale: 2 })
//   poids: number;

//   @Column()
//   groupeSanguin: string;

//   @Column('text')
//   allergies: string;

//   @Column('text')
//   antecedentsMedicaux: string;

//   @Column('text')
//   antecedentsFamiliaux: string;

//   @Column('text')
//   vaccinations: string;

//   @ManyToOne(() => Utilisateur, utilisateur => utilisateur.patients, { eager: true })
//   @JoinColumn({ name: 'id_utilisateur' })
//   utilisateur: Utilisateur;
// }
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Utilisateur } from './utilisateur.entity';
import { Rdv } from './rdv.entity';

@Entity('Patients')
export class Patient {
  @PrimaryGeneratedColumn()
  id_utilisateur: number;

  @ManyToOne(() => Utilisateur, utilisateur => utilisateur.patients, { eager: true })
  @JoinColumn({ name: 'id_utilisateur' })
  utilisateur: Utilisateur;

  @Column({ type: 'varchar', length: 10 })
  sexe: string;

  @Column()
  age: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  taille: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  poids: number;

  @Column({ type: 'varchar', length: 10 })
  groupeSanguin: string;

  @Column('text')
  allergies: string;

  @Column('text')
  antecedentsMedicaux: string;

  @Column('text')
  antecedentsFamiliaux: string;

  @Column('text')
  vaccinations: string;

  @OneToMany(() => Rdv, rdv => rdv.patient)
  rdvs: Rdv[];
}
