# laravel/socialite

> If you are using Laravel 5.3 or below, please use Socialite 2.0.
> https://github.com/laravel/socialite/tree/2.0
> https://laravelcollective.com/docs/5.2/html
> https://github.com/laracasts/flash/issues/55
> http://it.livekn.com/2016/06/laravel-5-facebook-socialite.html

```
php56 /usr/local/bin/composer require laravel/socialite 2.*
php56 /usr/local/bin/composer require "laravelcollective/html":"^5.2.0"
```


config/app.php

```
'providers' => [
    // Other service providers...
    Laravel\Socialite\SocialiteServiceProvider::class,
    Collective\Html\HtmlServiceProvider::class,

],
```

```
'aliases' => [
    // Other 
    'Socialite' => Laravel\Socialite\Facades\Socialite::class,
    'Form' => Collective\Html\FormFacade::class,
    'Html' => Collective\Html\HtmlFacade::class,
],
```

>Error : Call to undefined method Illuminate\Foundation\Application::bindShared()  

HtmlServiceProvider.php

~~bindShared()~~ -> singleton()



-------

router.php


```php
Route::get('/google/link', function() {
 return Socialite::driver('google')
            ->scopes(['email'])->redirect();
            
 //return Socialite::driver('google')->redirect();
});

Route::get('/google/callback', function() {
 $user = Socialite::driver('google')->user();
 var_dump($user);
});
```








