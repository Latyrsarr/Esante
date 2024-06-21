// src/rdv/rdv.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rdv } from '../entities/rdv.entity';
import { CreateRdvDto } from './dto/create-rdv.dto';
import { CreateMultipleRdvDto } from './dto/create-multiple-rdv.dto';
import { UpdateRdvDto } from './dto/update-rdv.dto';

@Injectable()
export class RdvService {
  constructor(
    @InjectRepository(Rdv)
    private readonly rdvRepository: Repository<Rdv>,
  ) {}

  async create(createRdvDto: CreateRdvDto): Promise<Rdv> {
    const rdv = this.rdvRepository.create(createRdvDto);
    return this.rdvRepository.save(rdv);
  }

  async createMultiple(createMultipleRdvDto: CreateMultipleRdvDto): Promise<Rdv[]> {
    const rdvs = createMultipleRdvDto.rdvs.map(dto => ({
      ...dto,
      statut: 'indisponible',
    }));
    return this.rdvRepository.save(rdvs);
  }

  async findAll(): Promise<Rdv[]> {
    return this.rdvRepository.find({
      relations: ['patient', 'patient.utilisateur', 'medecin'],
    });
  }

  async findOne(id: number): Promise<Rdv> {
    const rdv = await this.rdvRepository.findOne({
      where: { id },
      relations: ['patient', 'patient.utilisateur', 'medecin', 'medecin.utilisateur'],
    });
    if (!rdv) {
      throw new NotFoundException(`Rendez-vous #${id} non trouvé`);
    }
    return rdv;
  }

  async findByFilter(id_patient?: number, id_medecin?: number): Promise<Rdv[]> {
    const where: any = {};
    if (id_patient) {
      where.id_patient = id_patient;
    }
    if (id_medecin) {
      where.id_medecin = id_medecin;
    }
    return this.rdvRepository.find({
      where,
      relations: ['patient', 'patient.utilisateur', 'medecin', 'medecin.utilisateur'],
    });
  }

  async update(id: number, updateRdvDto: UpdateRdvDto): Promise<Rdv> {
    const rdv = await this.findOne(id);
    Object.assign(rdv, updateRdvDto);
    return this.rdvRepository.save(rdv);
  }

  async remove(id: number): Promise<void> {
    const rdv = await this.findOne(id);
    await this.rdvRepository.remove(rdv);
  }

  async cancel(id: number): Promise<Rdv> {
    const rdv = await this.findOne(id);
    rdv.statut = 'annule';
    return this.rdvRepository.save(rdv);
  }

  async setUnavailable(id: number): Promise<Rdv> {
    const rdv = await this.findOne(id);
    rdv.statut = 'indisponible';
    return this.rdvRepository.save(rdv);
  }

  async createUnavailableRdv(createRdvDto: CreateRdvDto): Promise<Rdv> {
    const rdv = this.rdvRepository.create({
      ...createRdvDto,
      statut: 'indisponible',
    });
    return this.rdvRepository.save(rdv);
  }
}


