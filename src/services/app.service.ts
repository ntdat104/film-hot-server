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
        {
          name: 'TV Detail',
          path: '/tv/tv-detail',
          method: 'GET',
          query: {
            id: 'number',
            category: 'number',
          },
          example: `/tv/tv-detail?id=6432&category=1`,
        },
        {
          name: 'TV Episode Media',
          path: '/tv/tv-episode-media',
          method: 'GET',
          query: {
            category: 'number',
            contentId: 'number',
            episodeId: 'number',
            definition: 'string',
          },
          example: `/tv/tv-episode-media?category=1&contentId=2542&episodeId=10743&definition=GROOT_SD`,
        },
        {
          name: 'Search Top Keywords',
          path: '/search/search-top-keywords',
          method: 'POST',
          body: {
            searchKeyWord: 'string',
            size: 'number',
          },
          bodyExample: {
            searchKeyWord: 'spider man',
            size: 10,
          },
        },
        {
          name: 'Search With Keyword',
          path: '/search/search-with-keyword',
          method: 'POST',
          body: {
            searchKeyWord: 'string',
            size: 'number',
            sort: 'string',
            searchType: 'string',
          },
          bodyExample: {
            searchKeyWord: 'spider',
            size: 50,
            sort: '',
            searchType: '',
          },
        },
        {
          name: 'Search Leader Board',
          path: '/search/search-leaderboard',
          method: 'GET',
        },
        {
          name: 'Search Config',
          path: '/search/search-config',
          method: 'GET',
        },
        {
          name: 'Search Advanced',
          path: '/search/search-advanced',
          method: 'POST',
          body: {
            size: 'number',
            params: 'string',
            area: 'string',
            category: 'string',
            year: 'string',
            subtitles: 'string',
            order: 'string',
          },
          bodyExample: {
            size: 50,
            params: '',
            area: '',
            category: '',
            year: '',
            subtitles: '',
            order: 'up',
          },
        },
        {
          name: 'Preview Videos',
          path: '/preview/preview-videos',
          method: 'GET',
          query: {
            page: 'number',
          },
          example: `/preview/preview-videos?page=0`,
        },
        {
          name: 'Preview Video Media',
          path: '/preview/preview-video-media',
          method: 'POST',
          body: 'category[]',
          category: {
            category: 'number',
            contentId: 'string',
            episodeId: 'number',
            definition: 'string',
          },
          bodyExample: [
            {
              category: 2,
              contentId: '8843',
              episodeId: 40199,
              definition: 'GROOT_LD',
            },
            {
              category: 2,
              contentId: '8845',
              episodeId: 40214,
              definition: 'GROOT_LD',
            },
            {
              category: 2,
              contentId: '8846',
              episodeId: 40221,
              definition: 'GROOT_LD',
            },
          ],
        },
      ],
    };
  }
}
