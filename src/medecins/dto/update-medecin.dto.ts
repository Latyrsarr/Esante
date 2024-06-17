// src/medecins/dto/update-medecin.dto.ts

import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateMedecinDto {
  @IsOptional()
  @IsString()
  specialite?: string;

  @IsOptional()
  @IsString()
  ville?: string;

  @IsOptional()
  @IsInt()
  id_hopital?: number;
}
