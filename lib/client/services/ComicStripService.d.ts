import type { ComicStripBaseResponse } from '../models/ComicStripBaseResponse';
import type { ComicStripFullResponse } from '../models/ComicStripFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ComicStripService {
    /**
     * Retrieval of a single comic strip
     * @param uid Comic strip unique ID
     * @returns ComicStripFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicStrip(uid: string): CancelablePromise<ComicStripFullResponse | Error>;
    /**
     * Pagination over comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicStripBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicStrips(pageNumber?: number, pageSize?: number): CancelablePromise<ComicStripBaseResponse | Error>;
    /**
     * Searching comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicStripBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicStrips(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ComicStripBaseResponse>;
}
