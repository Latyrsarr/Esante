import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { Utilisateur } from '../entities/utilisateur.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur]),
    forwardRef(() => AuthModule),
  ],
  providers: [UtilisateursService],
  controllers: [UtilisateursController],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}
