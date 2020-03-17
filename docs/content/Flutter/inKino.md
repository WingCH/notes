

middleware(順次序)

```dart
ActorMiddleware(tmdbApi),
TheaterMiddleware(keyValueStore),
ShowMiddleware(finnkinoApi),
EventMiddleware(finnkinoApi),
```





View -> `InitAction` -> theater_middleware -> `InitCompleteAction` -> ShowMiddleware -> 

