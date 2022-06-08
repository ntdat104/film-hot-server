import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { HomeModule } from './home.module';
import { MovieModule } from './movie.module';

@Module({
  imports: [HomeModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
