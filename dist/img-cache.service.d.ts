export interface ImgCacheConfig {
    debug?: boolean;
    localCacheFolder?: string;
    useDataURI?: boolean;
    chromeQuota?: number;
    usePersistentCache?: boolean;
    cacheClearSize?: number;
    headers?: {};
    withCredentials?: boolean;
    skipURIencoding?: boolean;
    cordovaFilesystemRoot?: string;
    timeout?: number;
}
export declare class ImgCacheService {
    private promise;
    init(config?: ImgCacheConfig): Promise<{}>;
    fetchFromCache(url: string): Promise<string>;
    clearCache(): Promise<null>;
    private checkInitialised;
    cacheIfNecessary(url: string): Promise<null>;
    replaceWithCached(url: string): Promise<string>;
}
