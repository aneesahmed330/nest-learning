import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cardium',
      brand: 'Colex',
      flavours: ['dark', 'light'],
    },
  ];

  get_all_coffees() {
    return [...this.coffees];
  }

  get_specific_coffee(id: string) {
    return { ...this.coffees.find((item) => item.id === parseInt(id)) };
  }

  create_coffee(createCoffeeDto: any) {
    createCoffeeDto = { id: this.coffees.length + 1, ...createCoffeeDto };
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update_coffee(id: string, updateCoffeeDto: any) {
    const existingCoffeeIndex = this.coffees.findIndex(
      (item) => item.id === parseInt(id),
    );
    if (existingCoffeeIndex >= 0) {
      //already exist
      this.coffees[existingCoffeeIndex] = {
        ...this.coffees[existingCoffeeIndex],
        ...updateCoffeeDto,
      };
    }
  }

  delete_coffee(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
