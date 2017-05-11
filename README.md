# ng-imagecache

Angular 2+ / Ionic 2+ module to cache images for offline use.

**Important Note**: this module supports Angular / Ionic versions 2 and above only. For Angular 1.x / Ionic 1.x, consider [angular-imgcache.js](https://github.com/jBenes/angular-imgcache.js), which this module was inspired by.

## Installation

```
npm install ng-imagecache
```

## Usage

### Angular 2+

TBC

### Ionic 2+

**1. Import the `ImgCacheModule`:**

``` ts
//app.module.ts

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ImgCacheModule } from 'ng-imgcache';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ImgCacheModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

**2. Initialise the cache in your `AppComponent`:**

``` ts
// app.component.ts

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ImgCacheService } from 'ng-imgcache';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, imgCache: ImgCacheService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Ensure you init once the platform is ready.
      imgCache.init({
        // Pass any options here...
      });
    });
  }
}
```

**3. Use the directive in your component templates:**

``` ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <img img-cache img-cache-src="http://placekitten.com/200/300">
    <div img-cache img-cache-bg-url="http://placekitten.com/200/300"></div>
  `,
  styles: [`
    div, img {
      height: 200px;
    }
  `]
})
export class AppComponent {};
```

That's it!

Image URLs that are specified in a `img-cache-src` or `img-cache-bg-url` attribute will be downloaded and cached for subsequent offline use.

Tip: make sure you use `img-cache-src` with `<img>` tags, as this will set the `src` attribute of the `<img>` tag to the cached image. For other elements, you can use the `img-cache-bg-url` attribute, which will set the `background-image` style of the element to point to the cached image.

## License

MIT

## Credits

Inspired by [angular-imgcache.js](https://github.com/jBenes/angular-imgcache.js), this module was rewritten to support Angular 2+ and Ionic 2+ projects. Uses the excellent [imgcache.js](https://github.com/jBenes/angular-imgcache.js) library.