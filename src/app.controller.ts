import {
  CACHE_MANAGER,
  CacheKey,
  Controller,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER)
    private readonly cache: Cache,
  ) {}

  @Get()
  defaultCacheKey(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  async deleteCacheKey(): Promise<string> {
    await this.cache.del('/');
    return 'cache key deleted /';
  }

  @Get('/custom')
  @CacheKey('customKey')
  customCacheKey(): Promise<string> {
    return this.appService.getHello();
  }
}
