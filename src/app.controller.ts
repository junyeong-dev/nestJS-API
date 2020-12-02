import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Controller은 url로의 요청을 받음
  // '/nestjs' 가 url이 됨
  // '/nestjs'로 들어오면 getNestjs()함수가 실행됨
  @Get('/nestjs')
  getNestjs(): string {
    return 'nestjs';
  }
  
}
