// src/hopital/dto/create-hopital.dto.ts
import { IsNotEmpty, IsString, IsPhoneNumber } from 'class-validator';

export class CreateHopitalDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  telephone: string;
}
