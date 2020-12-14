import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// @~ : nestjs에서는 데코레이션 이라고 명명
// AppModule은 모든 모듈의 루트같은 것
// 원칙적으로 app.module은 AppController와 AppService만 가질 수 있음
// 추가로 다른 module을 import할 수 있음
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
