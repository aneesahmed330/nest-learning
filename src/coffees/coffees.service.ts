import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  // private coffees: Coffee[] = [
  //   {
  //     id: 1,
  //     name: 'Cardium',
  //     brand: 'Colex',
  //     flavours: ['dark', 'light'],
  //   },
  // ];

  async get_all_coffees() {
    return [...(await this.coffeeRepository.find())];
  }

  async get_specific_coffee(id: number) {
    const coffee = await this.coffeeRepository.findOne({ where: { id } });
    console.log('coffee', coffee);
    if (!coffee)
      throw new NotFoundException(
        'Could not find the coffee with that particular id!',
      );
    return coffee;
  }

  async create_coffee(createCoffeeDto: any) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return await this.coffeeRepository.save(coffee);

    // createCoffeeDto = { id: this.coffees.length + 1, ...createCoffeeDto };
    // this.coffees.push(createCoffeeDto);
    // return createCoffeeDto;
  }

  async update_coffee(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    let coffee = await this.get_specific_coffee(id);
    coffee = { ...coffee, ...updateCoffeeDto };
    return this.coffeeRepository.save(coffee);

    // const existingCoffeeIndex = this.coffees.findIndex(
    //   (item) => item.id === parseInt(id),
    // );
    // if (existingCoffeeIndex >= 0) {
    //   //already exist
    //   this.coffees[existingCoffeeIndex] = {
    //     ...this.coffees[existingCoffeeIndex],
    //     ...updateCoffeeDto,
    //   };
    // }
  }

  async delete_coffee(id: number) {
    const coffee = await this.get_specific_coffee(id);
    return this.coffeeRepository.remove(coffee);
    // const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    // if (coffeeIndex >= 0) {
    //   this.coffees.splice(coffeeIndex, 1);
    // }
  }
}
