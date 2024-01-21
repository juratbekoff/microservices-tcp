import { Body, Controller, Inject, Post } from "@nestjs/common";
import { LoginDto, RegisterDto } from "./dtos/auth.dto";
import { ClientProxy } from "@nestjs/microservices";

@Controller("auth")
export class AuthController {
  constructor(@Inject("USER_SERVICE") private client: ClientProxy) {}

  @Post("login")
  async login(@Body() payload: LoginDto) {
    return this.client.send({ cmd: "AUTH_LOGIN" }, payload);
  }

  @Post("register")
  async register(@Body() payload: RegisterDto) {
    return this.client.send({ cmd: "AUTH_REGISTER" }, payload);
  }
}
