import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  getMovieDetail(id: number, category: number): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`/movieDrama/get?id=${id}&category=${category}`)
      .pipe(map((response) => response.data));
  }

  getMovieMedia(
    category: number,
    contentId: number,
    episodeId: number,
    definition: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(
        `/media/previewInfo?category=${category}&contentId=${contentId}&episodeId=${episodeId}&definition=${definition}`,
      )
      .pipe(map((response) => response.data));
  }
}
