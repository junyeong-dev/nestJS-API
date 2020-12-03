import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /* 
    Controller은 url로의 요청을 받음
    '/nestjs' 가 url이 됨
    '/nestjs'로 들어오면 getNestjs()함수가 실행됨
    Controller에서는 기본적으로 url을 가져오거나 함수를 리턴(실행)하는 역할을 함 
    비즈니스 로직은 Service에서 처리
    Controller의 함수명과 Service의 함수명이 꼭 같은 필요는 없음
  */
  @Get('/nestjs')
  getNestjs(): string {
    return this.appService.getNestjs();
  }
  
}
