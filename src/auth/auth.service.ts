import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UtilisateursService } from '../utilisateurs/utilisateurs.service';
import { Utilisateur } from '../entities/utilisateur.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UtilisateursService))
    private utilisateursService: UtilisateursService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, motDePasse: string): Promise<any> {
    const user = await this.utilisateursService.login(email, motDePasse);
    if (user) {
      const { motDePasse, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Utilisateur) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
