import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return 'All movies';
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return `Id : ${ id }`;
    }

    @Post()
    create() {
        return 'Create a movie';
    }

    @Delete('/:id')
    remove(@Param('id') id: string) {
        return 'Delete a movie';
    }

    @Patch('/:id')
    patch(@Param('id') id: string) {
        return 'Patch a movie';
    }

}
