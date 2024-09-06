/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { CoffeeController } from './coffee/coffee.controller';
import { CoffeeService } from './coffee/coffee.service';


@Module({
  imports: [],
  controllers: [AppController, UserController, CoffeeController],
  providers: [AppService, UserService, CoffeeService],
})
export class AppModule {}
