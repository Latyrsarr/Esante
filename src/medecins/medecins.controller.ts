import { Controller, Post, Body, Get, Param, Put, Delete, Query } from '@nestjs/common';
import { MedecinsService } from './medecins.service';
import { CreateMedecinDto } from './dto/create-medecin.dto';
import { UpdateMedecinDto } from './dto/update-medecin.dto';


@Controller('medecins')
export class MedecinsController {
  constructor(private readonly medecinsService: MedecinsService) {}

  @Get()
  findAll(@Query('specialite') specialite: string) {
    if (specialite) {
      return this.medecinsService.findBySpecialite(specialite);
    } else {
      return this.medecinsService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medecinsService.findOne(+id);
  }


  @Post()
  async create(@Body() createMedecinDto: CreateMedecinDto) {
    return this.medecinsService.create(createMedecinDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMedecinDto: UpdateMedecinDto) {
    return this.medecinsService.update(+id, updateMedecinDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medecinsService.remove(+id);
  }
}
