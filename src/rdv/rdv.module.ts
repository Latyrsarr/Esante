import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rdv } from '../entities/rdv.entity';
import { RdvService } from './rdv.service';
import { RdvController } from './rdv.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rdv])],
  providers: [RdvService],
  controllers: [RdvController],
})
export class RdvModule {}
