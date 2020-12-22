import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from 'src/app.service-bk';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    }));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Home');
  });

  describe('movies', () => {
    it('GET', () => {
      return request(app.getHttpServer())
      .get('/movies')
      .expect(200)
      .expect([]);
    });

    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test',
          year: 2000,
          genres: ['test'],
        })
        .expect(201);
    });

    it('DELETE', () => {
      return request(app.getHttpServer())
        .delete('/movies')
        .expect(404);
    });
  });

  describe('/movies/:id', () => {
    it('GET 200', () => {
      /* 
        그냥 이렇게 실행하면 에러가 발생, 이유는 id의 type이 서버에서는 number이고 
        test에서는 string이기 때문
        서버와 환경을 맞춰주기 위해서 main.ts의 8 ~ 12줄의 코드를 테스트 환경에서도 적용(16 ~ 20줄)
        타입변환과 관련이 되어있는 부분은 [ transform: true ] 
      */
        return request(app.getHttpServer())
        .get('/movies/1')
        .expect(200);
    });
    it.todo('DELETE');
    it.todo('PATCH');
  });

});
