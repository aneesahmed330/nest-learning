// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Patch,
//   Post,
//   Query,
// } from '@nestjs/common';
// import { CoffeesService } from './coffees.service';
// import { CreateCoffeeDto } from './dto/create-coffee.dto';
// import { UpdateCoffeeDto } from './dto/update-coffee.dto';
//
// @Controller('coffees')
// export class CoffeesController {
//   constructor(private readonly coffeeService: CoffeesService) {}
//
//   @Get()
//   get_all_coffees(@Query() paginatedQuery) {
//     let { limit, offset } = paginatedQuery;
//     return this.coffeeService.get_all_coffees();
//     // return `This action return all the coffees! with limit ${limit} and offset ${offset}☕`;
//   }
//
//   @Get(':id')
//   get_specific_coffee(@Param('id') id: number) {
//     return this.coffeeService.get_specific_coffee(id);
//     // return `This action return specific coffee of {id} ${id}! ☕`;
//   }
//
//   @Post()
//   create_coffee(@Body() createCoffeeDto: CreateCoffeeDto) {
//     return this.coffeeService.create_coffee(createCoffeeDto);
//     // return body;
//   }
//
//   @Patch(':id')
//   update_coffee(
//     @Param('id') id: number,
//     @Body() updateCoffeeDto: UpdateCoffeeDto,
//   ) {
//     return this.coffeeService.update_coffee(id, updateCoffeeDto);
//     // return `This action return updated coffee of {id} ${id}! ☕`;
//   }
//
//   @Delete(':id')
//   delete_coffee(@Param('id') id: number) {
//     return this.coffeeService.delete_coffee(id);
//     // return `This action return delete coffee of {id} ${id}! ☕`;
//   }
// }

import {
  Body,
  Controller,
  Param,
  Query,
  Get,
  Post,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
// import { Public } from '../common/decorators/public.decorator';
// import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
// import { Protocol } from '../common/decorators/protocol.decorator';
// import { ApiForbiddenResponse, ApiTags } from '@nestjs/swagger';

// @ApiTags('coffee')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  // @ApiForbiddenResponse({ description: 'Forbidden.' })
  @UsePipes(ValidationPipe)
  // @Public()
  @Get()
  async findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit ${limit}, ${offset}`;
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    // only int ?? example
    // return `This action returns #${id} coffee`;
    return this.coffeeService.findOne(id); // "" + id;
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // return body;
    // return `This action creates a coffee`;
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    // return `This action updates #${id} coffee`;
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    // return `This action removes #${id} coffee`;
    return this.coffeeService.remove(id);
  }
}









