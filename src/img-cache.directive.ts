import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ImgCacheService } from './img-cache.service';

@Directive({
  selector: '[img-cache]'
})
export class ImgCacheDirective {
  constructor(
    private imgCache: ImgCacheService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @Input('img-cache-src')
  set src(val) {
    if(val) {
      this.imgCache
        .fetchFromCache(val)
        .then(cached => {
          this.renderer.setAttribute(this.el.nativeElement, 'src', cached);
        });
    }
  };

  @Input('img-cache-bg-url')
  set bgUrl(val) {
    if(val) {
      this.imgCache
        .fetchFromCache(val)
        .then(cached => {
          this.renderer.setStyle(this.el.nativeElement, 'background-image', `url('${cached}')`)
        });
    }
  };
}