import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'All movies';
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return `Search movies after ${ searchingYear }` ;
    }

    // :getOne함수가 search함수보다 위에 있을 경우 url을 id로 착각하기 때문에 :id를 밑으로 둠
    @Get(':id')
    getOne(@Param('id') id: string) {
        return `Id : ${ id }`;
    }

    @Post()
    create(@Body() movieData) {
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Delete a movie';
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData
        };
    }

}
