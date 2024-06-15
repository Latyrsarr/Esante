import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HopitalController } from './hopital.controller';
import { HopitalService } from './hopital.service';
import { Hopital } from '../entities/hopital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hopital])],
  controllers: [HopitalController],
  providers: [HopitalService],
  exports: [HopitalService],
})
export class HopitalModule {}
  