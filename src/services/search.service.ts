import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  searchTopKeywords(
    searchKeyWord: string,
    size: number,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(`/search/searchLenovo`, {
        searchKeyWord,
        size,
      })
      .pipe(map((response) => response.data));
  }

  searchWithKeyword(
    searchKeyWord: string,
    size: number,
    sort: string,
    searchType: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(`/search/v1/searchWithKeyWord`, {
        searchKeyWord,
        size,
        sort,
        searchType,
      })
      .pipe(map((response) => response.data));
  }

  searchLeaderBoard(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`/search/v1/searchLeaderboard`)
      .pipe(map((response) => response.data));
  }

  searchConfig(): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`/search/list`)
      .pipe(map((response) => response.data));
  }

  searchAdvanced(
    size: number,
    params: string,
    area: string,
    category: string,
    year: string,
    subtitles: string,
    order: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(`/search/v1/search`, {
        size,
        params,
        area,
        category,
        year,
        subtitles,
        order,
      })
      .pipe(map((response) => response.data));
  }
}

