import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/user.dto";
import { UsersService } from "./users.service";
import { MessagePattern } from "@nestjs/microservices";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @MessagePattern({ cmd: "AUTH_REGISTER" })
  createUser(@Body() payload: CreateUserDto) {
    return this.usersService.createUser(payload);
  }

  @Get(":username")
  getUser(@Param("username") username: string) {
    return this.usersService.getbyUsername(username);
  }

  @MessagePattern({ cmd: "AUTH_LOGIN" })
  getUserByUsername(payload: CreateUserDto) {
    return this.usersService.getbyUsername(payload.username);
  }
}
