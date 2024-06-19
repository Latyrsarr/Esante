import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from '../entities/utilisateur.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilisateursService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly utilisateursRepository: Repository<Utilisateur>,
  ) {}

  async findOneByEmail(email: string): Promise<Utilisateur | undefined> {
    return this.utilisateursRepository.findOne({ where: { email } });
  }

  async login(email: string, motDePasse: string): Promise<Utilisateur> {
    const utilisateur = await this.utilisateursRepository.findOne({ where: { email } });

    if (!utilisateur) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const isPasswordValid = await bcrypt.compare(motDePasse, utilisateur.motDePasse);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    return utilisateur;
  }

  async create(email: string, motDePasse: string, nom: string, prenom: string, adresse: string, telephone: string, status: string): Promise<Utilisateur> {
    const hashedPassword = await bcrypt.hash(motDePasse, 10);
    const utilisateur = this.utilisateursRepository.create({ email, motDePasse: hashedPassword, nom, prenom, adresse, telephone, status });
    return this.utilisateursRepository.save(utilisateur);
  }
}
