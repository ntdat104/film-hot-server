import { SearchAdvancedDto } from '@/dtos/search/search-advanced-dto';
import { SearchTopKeywordsDto } from '@/dtos/search/search-top-keywords-dto';
import { SearchWithKeywordDto } from '@/dtos/search/search-with-keyword-dto';
import { SearchService } from '@/services/search.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('search-top-keywords')
  searchTopKeywords(
    @Body() searchTopKeywordsDto: SearchTopKeywordsDto,
  ): Observable<AxiosResponse<any>> {
    const { searchKeyWord, size } = searchTopKeywordsDto;
    return this.searchService.searchTopKeywords(searchKeyWord, size);
  }

  @Post('search-with-keyword')
  searchWithKeyword(
    @Body() searchWithKeywordDto: SearchWithKeywordDto,
  ): Observable<AxiosResponse<any>> {
    const { searchKeyWord, size, sort, searchType } = searchWithKeywordDto;
    return this.searchService.searchWithKeyword(
      searchKeyWord,
      size,
      sort,
      searchType,
    );
  }

  @Get('search-leaderboard')
  searchLeaderBoard(): Observable<AxiosResponse<any>> {
    return this.searchService.searchLeaderBoard();
  }

  @Get('search-config')
  searchConfig(): Observable<AxiosResponse<any>> {
    return this.searchService.searchConfig();
  }

  @Post('search-advanced')
  searchAdvanced(
    @Body() searchAdvancedDto: SearchAdvancedDto,
  ): Observable<AxiosResponse<any>> {
    const { size, params, area, category, year, subtitles, order } =
      searchAdvancedDto;
    return this.searchService.searchAdvanced(
      size,
      params,
      area,
      category,
      year,
      subtitles,
      order,
    );
  }
}

