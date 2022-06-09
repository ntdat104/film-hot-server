import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { HomeModule } from './home.module';
import { MovieModule } from './movie.module';
import { PreviewModule } from './preview.module';

@Module({
  imports: [HomeModule, MovieModule, PreviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
