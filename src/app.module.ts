import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Utilisateur } from './entities/utilisateur.entity';
import { Patient } from './entities/patient.entity';
import { Medecin } from './entities/medecin.entity';
import { Secretaire } from './entities/secretaire.entity';
import { Rdv } from './entities/rdv.entity';
import { DossierMedical } from './entities/dossier-medical.entity';
import { Hopital } from './entities/hopital.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'votre_utilisateur', // Remplacez par votre nom d'utilisateur MySQL
      password: 'votre_mot_de_passe', // Remplacez par votre mot de passe MySQL
      database: 'nom_de_votre_base_de_donnees', // Remplacez par le nom de votre base de données
      entities: [
        Utilisateur,
        Patient,
        Medecin,
        Secretaire,
        Rdv,
        DossierMedical,
        Hopital,
      ],
      synchronize: true, // Ne pas utiliser en production - peut supprimer/modifier les données
    }),
    TypeOrmModule.forFeature([
      Utilisateur,
      Patient,
      Medecin,
      Secretaire,
      Rdv,
      DossierMedical,
      Hopital,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
