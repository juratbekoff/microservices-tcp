import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/user.dto";

@Injectable()
export class UsersService {
  private readonly USERS: any[] = [
    {
      username: "juratbek",
      password: 123456,
    },
  ];

  createUser(userPayload: CreateUserDto) {
    this.USERS.push(userPayload);
    return this.USERS[this.USERS.length - 1];
  }

  getbyUsername(username: string) {
    let res = this.USERS.find((user) => user.username === username);
    if (!res) {
      return {
        status: 404,
        msg: "User is not found!",
      };
    }

    return res;
  }
}
