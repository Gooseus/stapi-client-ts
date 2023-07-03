import type { ComicCollectionBaseResponse } from '../models/ComicCollectionBaseResponse';
import type { ComicCollectionFullResponse } from '../models/ComicCollectionFullResponse';
import type { ComicCollectionV2FullResponse } from '../models/ComicCollectionV2FullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ComicCollectionService {
    /**
     * @deprecated
     * Retrieval of a single comic collection
     * @param uid Comic collection unique ID
     * @returns ComicCollectionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicCollection(uid: string): CancelablePromise<ComicCollectionFullResponse | Error>;
    /**
     * Pagination over comic collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicCollectionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicCollections(pageNumber?: number, pageSize?: number): CancelablePromise<ComicCollectionBaseResponse | Error>;
    /**
     * Searching comic collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicCollectionBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicCollections(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ComicCollectionBaseResponse>;
    /**
     * Retrieval of a single comic collection (V2)
     * @param uid Comic collection unique ID
     * @returns ComicCollectionV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetComicCollection(uid: string): CancelablePromise<ComicCollectionV2FullResponse | Error>;
}
