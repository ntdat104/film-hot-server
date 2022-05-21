import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private httpService: HttpService) {}

  getHomePage(page: number): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`/homePage/getHome?page=${page}`)
      .pipe(map((response) => response.data));
  }
}

