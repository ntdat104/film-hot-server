import ENV from '@/constants/env';
import { HEADERS } from '@/constants/header-request';
import { PreviewController } from '@/controllers/preview.controller';
import { PreviewService } from '@/services/preview.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      baseURL: ENV.BASE_URL,
      headers: HEADERS,
    }),
  ],
  controllers: [PreviewController],
  providers: [PreviewService],
})
export class PreviewModule {}
