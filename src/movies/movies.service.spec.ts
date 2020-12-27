import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  // 테스트를 하기 전에 실행
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 제대로 정의가 되는지 확인하는 테스트
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be test', () => {
    expect(2+2).toEqual(4);
  });

  // 모든 리스트를 가져오는 기능 테스트
  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  // 하나의 데이터를 가져오는 기능 테스트
  describe('getOne', () => {
    // 정상적으로 가져올때
    it('should retun a movie', () => {
      service.create({
        title: 'Test',
        genres: ['T', 'E', 'S', 'T'],
        year: 2020
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    // 해당하는 아이디가 없을때
    it('should throw 404 error', () => {
      try {
        service.getOne(404);
      } catch(e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Id not found');
      }
    });
  });

  // 하나의 데이터를 지우는 기능 테스트
  describe('deleteOne', () => {
    // 정상적으로 지울때
    it('deletes a movie', () => {
      service.create({
        title: 'Test',
        genres: ['T', 'E', 'S', 'T'],
        year: 2020
      });
      const allMovies = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(allMovies);
    });

    // 해당하는 아이디가 없을때
    it('should throw 404 error', () => {
      try {
        service.deleteOne(999);
      } catch(e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  // 데이터 작성하는 기능 테스트
  describe('create', () => {
    it('should create a movie', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: 'Test',
        genres: ['T', 'E', 'S', 'T'],
        year: 2020
      });
      const afterCreate = service.getAll().length;
      // 데이터를 만들기 전과 만든 후의 리스트 길이로 비교
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  // 데이터 업데이트 기능 테스트
  describe('update', () => {
    it('should update a movie', () => {
      service.create({
        title: 'Test',
        genres: ['T', 'E', 'S', 'T'],
        year: 2020
      });
      service.update(1, {title: 'Update test'});
      const movie = service.getOne(1);
      expect(movie.title).toEqual('Update test');
    });

    // 해당하는 아이디가 없을때
    it('should throw 404 error', () => {
      try {
        service.update(999, {});
      } catch(e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

});
