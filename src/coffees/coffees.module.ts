import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Module } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from "./entities/flavor.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
  exports: [],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
