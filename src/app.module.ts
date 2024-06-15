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
import { HopitalService } from './hopital/hopital.service';
import { HopitalModule } from './hopital/hopital.module';
import { HopitalController } from './hopital/hopital.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'stage', // Remplacez par votre nom d'utilisateur MySQL
      password: 'p@sser123', // Remplacez par votre mot de passe MySQL
      database: 'STAGE', // Remplacez par le nom de votre base de données
      entities: [
        Utilisateur,
        Patient,
        Medecin,
        Secretaire,
        Rdv,
        DossierMedical,
        Hopital,
      ],
      synchronize: false, // Ne pas utiliser en production - peut supprimer/modifier les données
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
    HopitalModule,
  ],
  controllers: [AppController, HopitalController],
  providers: [AppService, HopitalService],
})
export class AppModule {}
