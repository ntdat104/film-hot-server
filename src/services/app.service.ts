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
      ],
    };
  }
}
