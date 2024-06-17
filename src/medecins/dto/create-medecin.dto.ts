import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMedecinDto {
  @IsNumber()
  id_utilisateur: number;

  @IsNumber()
  id_hopital: number;

  @IsString()
  @IsNotEmpty()
  specialite: string;

  @IsString()
  @IsNotEmpty()
  ville: string;
}
