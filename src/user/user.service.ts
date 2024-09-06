/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CoffeeService } from 'src/coffee/coffee.service';

@Injectable()
export class UserService {
  constructor(private readonly coffeeService: CoffeeService) {}
  private users: User[] = [];
  get() {
    return this.users;
  }

  create(user: User) {
    const newUser = {
      ...user,
      // id: Math.floor(Math.random() * 1000),
    };
    this.users.push(newUser);
    return newUser;
  }

  getCoffeeName(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) return `User With Id: ${id} isn't found`;

    const coffeeNames = user.favCoffee.map((coffeeId) => {
      const coffee = this.coffeeService
        .get()
        .find((coffee) => coffee.id === user.id);
      return coffee ? coffee.name : `Coffee with ID ${coffeeId} not found`;
    });

    return coffeeNames;
  }

  updateUserById(id: string, updatedUser: User) {
    const updatedDoc = { ...updatedUser, id };
    this.users = this.users.map((user) => (user.id === id ? updatedDoc : user));
    return updatedDoc;
  }

  deleteUserById(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

export type User = {
  id: string;
  name: string;
  age: number;
  favCoffee: string[];
};
