import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        // +id 는 parseInt(id)와 같음
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie) {
            throw new NotFoundException("Id not found");
        }
        return movie;
    }

    deleteOne(id: string): boolean {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        });
    }

    update(id: string, updateData) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData });
    }
}