import { HttpModule } from '@nestjs/axios';
import { HomeService } from '@/services/home.service';
import { HomeController } from '@/controllers/home.controller';
import { Module } from '@nestjs/common';
import ENV from '@/constants/env';
import { HEADERS } from '@/constants/header-request';

@Module({
  imports: [
    HttpModule.register({
      baseURL: ENV.BASE_URL,
      headers: HEADERS,
    }),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}

