## SOLVA REDIS CACHING

### Route List

|No | Endpoint | Method  | Description | 
|---|---|---|---|
| 1 | /  | GET | Caching with default key '/'  |
| 2 | /  | POST  | Delete cache that has key '/'|
| 3 | /custom  | GET | Caching with custom key 'customKey'  |

NestJS has its own interceptor for handling cache named CacheInterceptor
all we need to do is use the interceptor in our controller using @UseInterceptor decorator
or define it in our module provider, then we are good to go!

By default NestJs use the url as the key, or we can define our own by calling @CacheKey decorator in our controller method.

Cheers!
