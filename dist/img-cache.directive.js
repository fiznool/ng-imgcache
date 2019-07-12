"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var img_cache_service_1 = require("./img-cache.service");
var ImgCacheDirective = /** @class */ (function () {
    function ImgCacheDirective(imgCache, el, renderer) {
        this.imgCache = imgCache;
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(ImgCacheDirective.prototype, "src", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.imgCache
                    .fetchFromCache(val)
                    .then(function (cached) {
                    _this.renderer.setAttribute(_this.el.nativeElement, 'src', cached);
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ImgCacheDirective.prototype, "bgUrl", {
        set: function (val) {
            var _this = this;
            if (val) {
                this.imgCache
                    .fetchFromCache(val)
                    .then(function (cached) {
                    _this.renderer.setStyle(_this.el.nativeElement, 'background-image', "url('" + cached + "')");
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    var _a, _b;
    __decorate([
        core_1.Input('img-cache-src'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ImgCacheDirective.prototype, "src", null);
    __decorate([
        core_1.Input('img-cache-bg-url'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ImgCacheDirective.prototype, "bgUrl", null);
    ImgCacheDirective = __decorate([
        core_1.Directive({
            selector: '[img-cache]'
        }),
        __metadata("design:paramtypes", [img_cache_service_1.ImgCacheService, typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer2 !== "undefined" && core_1.Renderer2) === "function" && _b || Object])
    ], ImgCacheDirective);
    return ImgCacheDirective;
}());
exports.ImgCacheDirective = ImgCacheDirective;
