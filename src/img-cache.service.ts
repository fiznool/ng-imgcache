import { Injectable } from '@angular/core';
import * as ImgCache from '@chrisben/imgcache.js';

export interface ImgCacheConfig {
  debug?: boolean,                 /* call the log method ? */
  localCacheFolder?: string,       /* name of the cache folder */
  useDataURI?: boolean,            /* use src="data:.."? otherwise will use src="filesystem:.." */
  chromeQuota?: number,           /* allocated cache space : here 10MB */
  usePersistentCache?: boolean,   /* false = use temporary cache storage */
  cacheClearSize?: number,        /* size in MB that triggers cache clear on init, 0 to disable */
  headers?: {},                   /* HTTP headers for the download requests -- e.g: headers: { 'Accept': 'application/jpg' } */
  withCredentials?: boolean,      /* indicates whether or not cross-site Access-Control requests should be made using credentials */
  skipURIencoding?: boolean,      /* enable if URIs are already encoded (skips call to sanitizeURI) */
  cordovaFilesystemRoot?: string, /* if specified, use one of the Cordova File plugin's app directories for storage */
  timeout?: number                /* timeout delay in ms for xhr request */
}

@Injectable()
export class ImgCacheService {
  private promise: Promise<{}>;

  init(config: ImgCacheConfig = {}) {
    Object.assign(ImgCache.options, config);

    this.promise = new Promise((resolve, reject) => {
      ImgCache.init(resolve, reject);
    });
    return this.promise;
  }

  fetchFromCache(url: string): Promise<string> {
    return Promise.resolve()
      .then(() => this.checkInitialised())
      .then(() => this.cacheIfNecessary(url))
      .then(() => this.replaceWithCached(url))
      .catch(err => {
        console.warn(err);
        return url;
      });
  }

  clearCache(): Promise<null> {
    return new Promise((resolve, reject) => {
      ImgCache.clearCache(resolve, reject);
    });
  }

  private checkInitialised() {
    if(!this.promise) {
      throw new Error('ImgCache has not been initialised. Please call `init` before using the library.');
    }
  }

  private cacheIfNecessary(url: string): Promise<null> {
    return new Promise((resolve, reject) => {
      // Check if image is cached
      ImgCache.isCached(url, (path, success) => {
        if (success) {
          // already cached
          resolve();
        } else {
        // not there, need to cache the image
          ImgCache.cacheFile(url, resolve, reject);
        }
      });
    })
  }

  private replaceWithCached(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      ImgCache.getCachedFileBase64Data(
        url,
        (src, dest) => resolve(dest),
        () => reject(new Error('Could not replace with cached file'))
      );
    });
  }
}