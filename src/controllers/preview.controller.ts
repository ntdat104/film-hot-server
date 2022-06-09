import { CategoryDto } from '@/dtos/preview/category-dto';
import { PreviewVideosQuery } from '@/interfaces/preview/preview-videos-query';
import { PreviewService } from '@/services/preview.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('preview')
export class PreviewController {
  constructor(private readonly previewService: PreviewService) {}

  @Get('preview-videos')
  getPreviewVideos(
    @Query() previewVideosQuery: PreviewVideosQuery,
  ): Observable<AxiosResponse<any>> {
    console.log(previewVideosQuery);
    const { page = 0 } = previewVideosQuery;
    return this.previewService.getPreviewVideos(page);
  }

  @Post('preview-video-media')
  getPreviewVideoMedia(
    @Body() categoryDto: CategoryDto[],
  ): Observable<AxiosResponse<any>> {
    return this.previewService.getPreviewVideoMedia(categoryDto);
  }
}
