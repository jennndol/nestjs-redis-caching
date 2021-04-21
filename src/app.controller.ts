import { CacheKey, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  defaultCacheKey(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/custom')
  @CacheKey('customKey')
  customCacheKey(): Promise<string> {
    return this.appService.getHello();
  }
}
