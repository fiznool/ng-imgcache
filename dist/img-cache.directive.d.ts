import { ElementRef, Renderer2 } from '@angular/core';
import { ImgCacheService } from './img-cache.service';
export declare class ImgCacheDirective {
    private imgCache;
    private el;
    private renderer;
    constructor(imgCache: ImgCacheService, el: ElementRef, renderer: Renderer2);
    src: any;
    bgUrl: any;
}
