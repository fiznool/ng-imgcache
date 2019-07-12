"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ImgCache = require("@chrisben/imgcache.js");
var ImgCacheService = /** @class */ (function () {
    function ImgCacheService() {
    }
    ImgCacheService.prototype.init = function (config) {
        if (config === void 0) { config = {}; }
        Object.assign(ImgCache.options, config);
        this.promise = new Promise(function (resolve, reject) {
            ImgCache.init(resolve, reject);
        });
        return this.promise;
    };
    ImgCacheService.prototype.fetchFromCache = function (url) {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.checkInitialised(); })
            .then(function () { return _this.cacheIfNecessary(url); })
            .then(function () { return _this.replaceWithCached(url); })
            .catch(function (err) {
            console.warn(err);
            return url;
        });
    };
    ImgCacheService.prototype.clearCache = function () {
        return new Promise(function (resolve, reject) {
            ImgCache.clearCache(resolve, reject);
        });
    };
    ImgCacheService.prototype.checkInitialised = function () {
        if (!this.promise) {
            throw new Error('ImgCache has not been initialised. Please call `init` before using the library.');
        }
    };
    ImgCacheService.prototype.cacheIfNecessary = function (url) {
        return new Promise(function (resolve, reject) {
            // Check if image is cached
            ImgCache.isCached(url, function (path, success) {
                if (success) {
                    // already cached
                    resolve();
                }
                else {
                    // not there, need to cache the image
                    ImgCache.cacheFile(url, resolve, reject);
                }
            });
        });
    };
    ImgCacheService.prototype.replaceWithCached = function (url) {
        return new Promise(function (resolve, reject) {
            ImgCache.getCachedFileBase64Data(url, function (src, dest) { return resolve(dest); }, function () { return reject(new Error('Could not replace with cached file')); });
        });
    };
    ImgCacheService = __decorate([
        core_1.Injectable()
    ], ImgCacheService);
    return ImgCacheService;
}());
exports.ImgCacheService = ImgCacheService;
