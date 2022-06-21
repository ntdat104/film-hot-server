import { Controller, Get, Query } from '@nestjs/common';
import { TvService } from '@/services/tv.service';
import { TvDetailQuery } from '@/interfaces/tv/tv-detail-query';
import { TvEpisodeMedia } from '@/interfaces/tv/tv-episode-media';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('tv')
export class TvController {
  constructor(private readonly tvService: TvService) {}

  @Get('tv-detail')
  getTvDetail(
    @Query() tvDetailQuery: TvDetailQuery,
  ): Observable<AxiosResponse<any>> {
    const { id, category } = tvDetailQuery;
    return this.tvService.getTvDetail(id, category);
  }

  @Get('tv-episode-media')
  getTvEpisodeMedia(
    @Query() tvEpisodeMedia: TvEpisodeMedia,
  ): Observable<AxiosResponse<any>> {
    const { category, contentId, episodeId, definition } = tvEpisodeMedia;
    return this.tvService.getTvEpisodeMedia(
      category,
      contentId,
      episodeId,
      definition,
    );
  }
}

