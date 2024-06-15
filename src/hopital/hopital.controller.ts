// hopital.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, Query, NotFoundException } from '@nestjs/common';
import { Hopital } from 'src/entities/hopital.entity';
import { HopitalService } from './hopital.service';

@Controller('hopital')
export class HopitalController {
    constructor(private hopitalService: HopitalService) {}

    @Get()
    async findAll(@Query() query: any): Promise<Hopital[]> {
        if (query.id) {
            return [await this.hopitalService.findOne(query.id)];
        } else if (query.nom) {
            return this.hopitalService.findByFilter({ nom: query.nom });
        } else {
            return this.hopitalService.findAll();
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Hopital> {
        return this.hopitalService.findOne(+id);
    }

    @Post()
    async create(@Body() hopitalData: Partial<Hopital>): Promise<Hopital> {
        return this.hopitalService.create(hopitalData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() hopitalData: Partial<Hopital>): Promise<Hopital> {
        return this.hopitalService.update(+id, hopitalData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.hopitalService.remove(+id);
    }
}
