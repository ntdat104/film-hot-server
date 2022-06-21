import ENV from '@/constants/env';
import { HEADERS } from '@/constants/header-request';
import { TvController } from '@/controllers/tv.controller';
import { TvService } from '@/services/tv.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      baseURL: ENV.BASE_URL,
      headers: HEADERS,
    }),
  ],
  controllers: [TvController],
  providers: [TvService],
})
export class TvModule {}

