// src/rdv/dto/create-multiple-rdv.dto.ts
import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRdvDto } from './create-rdv.dto';

export class CreateMultipleRdvDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRdvDto)
  rdvs: CreateRdvDto[];
}
