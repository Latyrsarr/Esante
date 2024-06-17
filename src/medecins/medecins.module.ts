import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from 'src/entities/medecin.entity'; // Assurez-vous que le nom de l'entité est correct
import { MedecinsService } from './medecins.service'; // Vérifiez le nom du service
import { MedecinsController } from './medecins.controller'; // Vérifiez le nom du contrôleur

@Module({
  imports: [
    TypeOrmModule.forFeature([Medecin]), // Assurez-vous que l'entité est correctement importée
  ],
  providers: [MedecinsService],
  controllers: [MedecinsController],
})
export class MedecinsModule {}
