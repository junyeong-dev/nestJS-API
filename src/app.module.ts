import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @~ : nestjs에서는 데코레이션 이라고 명명
// AppModule은 모든 모듈의 루트같은 것
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
