import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Hopitaux' })
export class Hopital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  adresse: string;

  @Column()
  telephone: string;
}
