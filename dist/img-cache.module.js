"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var img_cache_directive_1 = require("./img-cache.directive");
var img_cache_service_1 = require("./img-cache.service");
var ImgCacheModule = /** @class */ (function () {
    function ImgCacheModule() {
    }
    ImgCacheModule = __decorate([
        core_1.NgModule({
            declarations: [img_cache_directive_1.ImgCacheDirective],
            exports: [img_cache_directive_1.ImgCacheDirective],
            providers: [img_cache_service_1.ImgCacheService]
        })
    ], ImgCacheModule);
    return ImgCacheModule;
}());
exports.ImgCacheModule = ImgCacheModule;
