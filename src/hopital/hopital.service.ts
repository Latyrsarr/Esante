// hopital.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hopital } from 'src/entities/hopital.entity';

@Injectable()
export class HopitalService {
    constructor(
        @InjectRepository(Hopital)
        private hopitalRepository: Repository<Hopital>,
    ) {}

    async findAll(): Promise<Hopital[]> {
        return this.hopitalRepository.find();
    }

    // async findOne(id: number): Promise<Hopital> {
    //     const hopital = await this.hopitalRepository.findOne(id);
    //     if (!hopital) {
    //         throw new NotFoundException(`Hopital with ID ${id} not found`);
    //     }
    //     return hopital;
    // }
    async findOne(id: number): Promise<Hopital> {
        const hopital = await this.hopitalRepository.findOne({ where: { id } });
        if (!hopital) {
            throw new NotFoundException(`Hopital with ID ${id} not found`);
        }
        return hopital;
    }

    async create(hopitalData: Partial<Hopital>): Promise<Hopital> {
        const newHopital = this.hopitalRepository.create(hopitalData);
        return this.hopitalRepository.save(newHopital);
    }

    async update(id: number, hopitalData: Partial<Hopital>): Promise<Hopital> {
        await this.findOne(id); // Vérifie si l'hôpital existe
        await this.hopitalRepository.update(id, hopitalData);
        return this.findOne(id); // Renvoie l'hôpital mis à jour
    }

    async remove(id: number): Promise<void> {
        const hopital = await this.findOne(id); // Vérifie si l'hôpital existe
        await this.hopitalRepository.remove(hopital);
    }

    // async findByFilter(filter: { id?: number; nom?: string }): Promise<Hopital[]> {
    //     return this.hopitalRepository.find(filter);
    // }
    async findByFilter(filter: { id?: number; nom?: string }): Promise<Hopital[]> {
        return this.hopitalRepository.find({ where: filter });
    }
}
