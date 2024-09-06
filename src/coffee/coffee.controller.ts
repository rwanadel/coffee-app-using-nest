/* eslint-disable prettier/prettier */

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Coffee, CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  private service;
  constructor(private readonly coffeeservice: CoffeeService) {}

  @Get()
  getAllUsers() {
    return this.coffeeservice.get();
  }

  @Post()
  createUser(@Body() body) {
    console.log(body);

    return this.coffeeservice.create(body);
  }

  @Delete(':id')
  deleteCoffee(@Param('id') id: string) {
    return this.coffeeservice.deleteCoffee(id);
  }

  @Patch(':id')
  updateCoffee(@Param('id') id: string, @Body() coffee: Coffee) {
    return this.coffeeservice.updateCoffee(id, coffee);
  }
}
