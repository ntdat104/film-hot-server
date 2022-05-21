import { Controller, Get, Query } from '@nestjs/common';
import { HomeService } from '@/services/home.service';
import { HomeQuery } from '@/interfaces/home/home-query';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('home-page')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  getHomePage(@Query() homeQuery: HomeQuery): Observable<AxiosResponse<any>> {
    const { page = 0 } = homeQuery;
    return this.homeService.getHomePage(page);
  }
}

