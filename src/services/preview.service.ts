import { Category } from '@/interfaces/preview/category';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class PreviewService {
  constructor(private readonly httpService: HttpService) {}

  getPreviewVideos(page: number): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`/recommendPool/getVideoFromRecommondPool?page=${page}`)
      .pipe(map((response) => response.data));
  }

  getPreviewVideoMedia(
    categoryList: Category[],
  ): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(`/media/bathGetplayInfo`, categoryList)
      .pipe(map((response) => response.data));
  }
}
