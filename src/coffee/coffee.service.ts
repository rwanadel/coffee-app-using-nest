/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: '1',
      name: 'Espresso',
      price: 2.5,
    },
    {
      id: '2',
      name: 'Espresso2',
      price: 2.5,
    },
    {
      id: '3',
      name: 'latte',
      price: 2.5,
    },
    {
      id: '4',
      name: 'cap',
      price: 2.5,
    },
    {
      id: '5',
      name: 'french',
      price: 2.5,
    },
  ];
  get() {
    return this.coffees;
  }

  create(coffee: Coffee) {
    const newUser = {
      ...coffee,
      // id: Math.floor(Math.random() * 1000),
    };
    this.coffees.push(newUser);
    return newUser;
  }

  deleteCoffee(id: string) {
    this.coffees = this.coffees.filter((coffee) => coffee.id !== id);
  }

  updateCoffee(id: string, updatedCoffee: Coffee) {
    const updatedDoc = { ...updatedCoffee, id };
    this.coffees = this.coffees.map((coffee) =>
      coffee.id === id ? updatedDoc : coffee,
    );
    return updatedDoc;
  }
}

export type Coffee = {
  id: string;
  name: string;
  price: number;
};
