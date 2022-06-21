import ENV from '@/constants/env';
import { HEADERS } from '@/constants/header-request';
import { SearchController } from '@/controllers/search.controller';
import { SearchService } from '@/services/search.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      baseURL: ENV.BASE_URL,
      headers: HEADERS,
    }),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}

