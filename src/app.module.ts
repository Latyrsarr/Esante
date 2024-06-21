import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
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
import { MedecinsModule } from './medecins/medecins.module';
import { UtilisateursService } from './utilisateurs/utilisateurs.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { RdvService } from './rdv/rdv.service';
import { RdvController } from './rdv/rdv.controller';
import { RdvModule } from './rdv/rdv.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'stage',
      password: 'p@sser123',
      database: 'STAGE',
      entities: [
        Utilisateur,
        Patient,
        Medecin,
        Secretaire,
        Rdv,
        DossierMedical,
        Hopital,
      ],
      synchronize: false,
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
    JwtModule.register({
      secret: 'secretKey', // Remplacez par une valeur secrète plus sécurisée en production
      signOptions: { expiresIn: '24h' }, // Durée de validité du token
    }),
    HopitalModule,
    MedecinsModule,
    UtilisateursModule,
    AuthModule,
    RdvModule,
  ],
  controllers: [AppController, HopitalController, RdvController],
  providers: [AppService, HopitalService, UtilisateursService, AuthService, RdvService],
})
export class AppModule {}
