import { NgModule, ModuleWithProviders } from '@angular/core';

import { ImgCacheDirective } from './img-cache.directive';
import { ImgCacheService } from './img-cache.service';

@NgModule({
  declarations: [ ImgCacheDirective ],
  exports: [ ImgCacheDirective ]
})
export class ImgCacheModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ImgCacheModule,
      providers: [
        ImgCacheService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: ImgCacheModule
    };
  }
}
