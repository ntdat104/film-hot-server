import { MovieDetailQuery } from '@/interfaces/movie/movie-detail-query';
import { MovieService } from '@/services/movie.service';
import { Controller, Get, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('movie-detail')
  getMovieDetail(
    @Query() movieDetailQuery: MovieDetailQuery,
  ): Observable<AxiosResponse<any>> {
    const { id, category } = movieDetailQuery;
    return this.movieService.getMovieDetail(id, category);
  }
}
