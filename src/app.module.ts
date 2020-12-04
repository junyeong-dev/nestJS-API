import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';

// @~ : nestjs에서는 데코레이션 이라고 명명
// AppModule은 모든 모듈의 루트같은 것
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
