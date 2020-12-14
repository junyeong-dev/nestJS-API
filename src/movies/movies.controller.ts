import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) { }

    /* 
        NestJS는 Express 위에서 돌아감
        NestJS는 2개의 프레임워크랑 작동
        Express와 Fastify
        기본적으로 Express에서 돌아가지만 Fastify로 변경할 수 있음
        성능 향상을 위해서는 Fastify가 최고
        
        getAll(@Req() req, @Res() res): Movie[] {
            res.json
        }
        위와 같이 플랫폼이나 어플리케이션에 Req, Res 같은 데코레이터를 이용해 Express에 접근할 수 있음
        하지만 추천하지는 않음
        Fastify는 위와 같은 방법을 사용하지 않음
    */
    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    // :getOne함수가 search함수보다 위에 있을 경우 url을 id로 착각하기 때문에 :id를 밑으로 둠
    // url은 /movies/{id} 
    @Get(':id')
    getOne(@Param('id') movieId: number): Movie {
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.movieService.create(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId: number) {
        return this.movieService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.movieService.update(movieId, updateData);
    }

}
