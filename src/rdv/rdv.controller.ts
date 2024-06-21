// src/rdv/rdv.controller.ts

import { Controller, Get, Post, Body, Patch, Param, Query, UseGuards } from '@nestjs/common';
import { RdvService } from './rdv.service';
import { CreateRdvDto } from './dto/create-rdv.dto';
import { CreateMultipleRdvDto } from './dto/create-multiple-rdv.dto';
import { UpdateRdvDto } from './dto/update-rdv.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('rdvs')
export class RdvController {
  constructor(private readonly rdvService: RdvService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body() createRdvDto: CreateRdvDto) {
    return this.rdvService.create(createRdvDto);
  }

  @Post('/indisponibles')
  async createMultipleUnavailable(@Body() createMultipleRdvDto: CreateMultipleRdvDto) {
    return this.rdvService.createMultiple(createMultipleRdvDto);
  }

  @Get()
  async findAll() {
    return this.rdvService.findAll();
  }

  @Get('/filter')
  async findByFilter(@Query('id_patient') id_patient: number, @Query('id_medecin') id_medecin: number) {
    return this.rdvService.findByFilter(id_patient, id_medecin);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rdvService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRdvDto: UpdateRdvDto) {
    return this.rdvService.update(+id, updateRdvDto);
  }

  @Patch(':id/annuler')
  async cancel(@Param('id') id: string) {
    return this.rdvService.cancel(+id);
  }

  @Patch(':id/indisponible')
  async setUnavailable(@Param('id') id: string) {
    return this.rdvService.setUnavailable(+id);
  }
}
