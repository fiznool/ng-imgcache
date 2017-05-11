import { NgModule, ModuleWithProviders } from '@angular/core';

import { ImgCacheDirective } from './img-cache.directive';
import { ImgCacheService } from './img-cache.service';

@NgModule({
  declarations: [ ImgCacheDirective ],
  exports: [ ImgCacheDirective ],
  providers: [ ImgCacheService ]
})
export class ImgCacheModule {}
