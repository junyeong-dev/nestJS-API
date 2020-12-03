import { Injectable } from '@nestjs/common';

// Service 실질적인 비즈니스 로직을 실행하는 곳
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getNestjs(): string {
    return 'Nestjs';
  }
}
