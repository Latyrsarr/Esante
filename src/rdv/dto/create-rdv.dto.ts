// src/rdv/dto/create-rdv.dto.ts
import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRdvDto {
  @IsNotEmpty()
  @IsNumber()
  id_patient: number;

  @IsNotEmpty()
  @IsNumber()
  id_medecin: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  heure: string;

  @IsOptional()
  @IsString()
  statut?: string;

  @IsOptional()
  @IsString()
  motif?: string;
}
