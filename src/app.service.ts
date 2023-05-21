import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// 요청, 응답에 대해서는 몰라요.
@Injectable()
export class AppService {
  constructor(private readonly configServcie: ConfigService) {}

  async getHello() {
    return process.env.SECRET;
  }

  // async getUser(): string {
  //   const user = await User.findIne();
  //   return user;
  // }

  // async postUser(): string {
  //   const user = await User.create();
  //   return user;
  // }

  // getHello(): string { } {
  // return process.env.Name;
  // }

  // getHello(): string {
  //   return this.configServcie.get('DB_PASSWORD');
  //   // process.env.DB_PASSWORD 와 같음
  // }
}
