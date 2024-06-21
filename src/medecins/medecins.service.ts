// // medecins.service.ts

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Like, Repository } from 'typeorm';
// import { Medecin } from 'src/entities/medecin.entity';
// import { CreateMedecinDto } from './dto/create-medecin.dto';
// import { UpdateMedecinDto } from './dto/update-medecin.dto';

// @Injectable()
// export class MedecinsService {
//   constructor(
//     @InjectRepository(Medecin)
//     private readonly medecinRepository: Repository<Medecin>,
//   ) {}

//   async findAll(): Promise<Medecin[]> {
//     return this.medecinRepository.find({ relations: ['utilisateur', 'hopital'] });
//   }

//   async findOne(id_utilisateur: number): Promise<Medecin> {
//     const medecin = await this.medecinRepository.findOne({ where: { id_utilisateur }, relations: ['utilisateur', 'hopital'] });
//     if (!medecin) {
//       throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
//     }
//     return medecin;
//   }

//   async findBySpecialite(specialite: string): Promise<Medecin[]> {
//     return this.medecinRepository.find({
//       where: { specialite: Like(`%${specialite}%`) },
//       relations: ['utilisateur', 'hopital'],
//     });
//   }
  
//   async create(createMedecinDto: CreateMedecinDto): Promise<Medecin> {
//     const medecin = this.medecinRepository.create(createMedecinDto);
//     return this.medecinRepository.save(medecin);
//   }

//   async update(id_utilisateur: number, updateMedecinDto: UpdateMedecinDto): Promise<Medecin> {
//     const medecin = await this.medecinRepository.findOne({ where: { id_utilisateur } });
//     if (!medecin) {
//       throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
//     }
//     const updatedMedecin = { ...medecin, ...updateMedecinDto };
//     return this.medecinRepository.save(updatedMedecin);
//   }

//   async remove(id_utilisateur: number): Promise<void> {
//     const medecin = await this.medecinRepository.findOne({ where: { id_utilisateur } });
//     if (!medecin) {
//       throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
//     }
//     await this.medecinRepository.remove(medecin);
//   }
// }
// src/medecins/medecins.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Medecin } from 'src/entities/medecin.entity';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';
import { Utilisateur } from 'src/entities/utilisateur.entity';

@Injectable()
export class MedecinsService {
  constructor(
    @InjectRepository(Medecin)
    private readonly medecinRepository: Repository<Medecin>,
  ) {}

  async findAll(): Promise<Medecin[]> {
    return this.medecinRepository.find({ relations: ['utilisateur', 'hopital'] });
  }

  async findOne(id_utilisateur: number): Promise<Medecin> {
    const medecin = await this.medecinRepository.findOne({ where: { utilisateur: { id: id_utilisateur } }, relations: ['utilisateur', 'hopital'] });
    if (!medecin) {
      throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
    }
    return medecin;
  }

  async findBySpecialite(specialite: string): Promise<Medecin[]> {
    return this.medecinRepository.find({
      where: { specialite: Like(`%${specialite}%`) },
      relations: ['utilisateur', 'hopital'],
    });
  }

  async create(createMedecinDto: CreateMedecinDto): Promise<Medecin> {
    const medecin = this.medecinRepository.create(createMedecinDto);
    return this.medecinRepository.save(medecin);
  }

  async update(id_utilisateur: number, updateMedecinDto: UpdateMedecinDto): Promise<Medecin> {
    const medecin = await this.findOne(id_utilisateur);
    if (!medecin) {
      throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
    }
    Object.assign(medecin, updateMedecinDto);
    return this.medecinRepository.save(medecin);
  }

  async remove(id_utilisateur: number): Promise<void> {
    const medecin = await this.findOne(id_utilisateur);
    if (!medecin) {
      throw new NotFoundException(`Medecin with id_utilisateur ${id_utilisateur} not found`);
    }
    await this.medecinRepository.remove(medecin);
  }
}
