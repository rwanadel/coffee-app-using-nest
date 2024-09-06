/* eslint-disable prettier/prettier */
import { User, UserService } from './user.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  private service;
  constructor(private readonly userservice: UserService) {}
  @Get()
  getAllUsers() {
    return this.userservice.get();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return `return user with ${id}`;
  }

  @Post()
  createUser(@Body() body) {
    console.log(body);

    return this.userservice.create(body);
  }

  @Get(':id/coffees')
  getCoffeeName(@Param('id') userId: string) {
    return this.userservice.getCoffeeName(userId);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userservice.deleteUserById(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: User) {
    return this.userservice.updateUserById(id, user);
  }
}
