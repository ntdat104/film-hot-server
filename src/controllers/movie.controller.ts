import { MovieDetailQuery } from '@/interfaces/movie/movie-detail-query';
import { MovieMediaQuery } from '@/interfaces/movie/movie-media-query';
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

  @Get('movie-media')
  getMovieMedia(
    @Query() movieMediaQuery: MovieMediaQuery,
  ): Observable<AxiosResponse<any>> {
    const { category, contentId, episodeId, definition } = movieMediaQuery;
    return this.movieService.getMovieMedia(
      category,
      contentId,
      episodeId,
      definition,
    );
  }
}
