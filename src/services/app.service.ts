import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      author: 'ntdat104',
      routes: [
        {
          name: 'Home',
          path: '/home-page',
          method: 'GET',
          query: {
            page: 'number',
          },
          example: `/home-page?page=1`,
        },
        {
          name: 'Movie Detail',
          path: '/movie/movie-detail',
          method: 'GET',
          query: {
            id: 'number',
            category: 'number',
          },
          example: `/movie/movie-detail?id=8084&category=0`,
        },
        {
          name: 'Movie Media',
          path: '/movie/movie-media',
          method: 'GET',
          query: {
            category: 'number',
            contentId: 'number',
            episodeId: 'number',
            definition: 'string',
          },
          example: `/movie/movie-media?category=0&contentId=8084&episodeId=37813&definition=GROOT_LD`,
        },
      ],
    };
  }
}
