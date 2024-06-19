import { Controller, Post, Body, UnauthorizedException, Inject, forwardRef } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { AuthService } from '../auth/auth.service';

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(
    private readonly utilisateursService: UtilisateursService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(@Body() createUserDto: {
    email: string;
    motDePasse: string;
    nom: string;
    prenom: string;
    adresse: string;
    telephone: string;
    status: string;
  }) {
    const utilisateur = await this.utilisateursService.create(
      createUserDto.email,
      createUserDto.motDePasse,
      createUserDto.nom,
      createUserDto.prenom,
      createUserDto.adresse,
      createUserDto.telephone,
      createUserDto.status,
    );
    return utilisateur;
  }

  @Post('login')
  async login(@Body() credentials: { email: string; motDePasse: string }) {
    try {
      const utilisateur = await this.utilisateursService.login(credentials.email, credentials.motDePasse);
      return this.authService.login(utilisateur); // Retourne l'access_token
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw new UnauthorizedException(error.message);
      }
      throw new UnauthorizedException('Identifiants invalides');
    }
  }
}
