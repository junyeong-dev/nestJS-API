import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService: MoviesService) {

    }

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    // :getOne함수가 search함수보다 위에 있을 경우 url을 id로 착각하기 때문에 :id를 밑으로 둠
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
    patch(@Param('id') movieId: number, @Body() updateData) {
        return this.movieService.update(movieId, updateData);
    }

}
