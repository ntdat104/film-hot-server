import ENV from '@/constants/env';
import { HEADERS } from '@/constants/header-request';
import { MovieController } from '@/controllers/movie.controller';
import { MovieService } from '@/services/movie.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      baseURL: ENV.BASE_URL,
      headers: HEADERS,
    }),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
