import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('abc')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('CUSTOM_KEY') private readonly customValue,
  ) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // 요청(req), 응답(res)에 대해 알아요
  // @Get('user') // GET /abc/user
  // getHello(): string {
  //   return this.appService.getUser();
  // }

  // @Post('user') // POST /abc/user
  // postHello(): string {
  //   return this.appService.postUser();
  // }
}
