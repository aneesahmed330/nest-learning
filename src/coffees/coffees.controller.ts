import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  get_all_coffees(@Query() paginatedQuery) {
    let { limit, offset } = paginatedQuery;
    return this.coffeeService.get_all_coffees();
    // return `This action return all the coffees! with limit ${limit} and offset ${offset}☕`;
  }

  @Get(':id')
  get_specific_coffee(@Param('id') id: number) {
    return this.coffeeService.get_specific_coffee(id);
    // return `This action return specific coffee of {id} ${id}! ☕`;
  }

  @Post()
  create_coffee(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create_coffee(createCoffeeDto);
    // return body;
  }

  @Patch(':id')
  update_coffee(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update_coffee(id, updateCoffeeDto);
    // return `This action return updated coffee of {id} ${id}! ☕`;
  }

  @Delete(':id')
  delete_coffee(@Param('id') id: number) {
    return this.coffeeService.delete_coffee(id);
    // return `This action return delete coffee of {id} ${id}! ☕`;
  }
}
