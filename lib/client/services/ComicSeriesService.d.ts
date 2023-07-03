import type { ComicSeriesBaseResponse } from '../models/ComicSeriesBaseResponse';
import type { ComicSeriesFullResponse } from '../models/ComicSeriesFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ComicSeriesService {
    /**
     * Retrieval of a single comic series
     * @param uid Comic series unique ID
     * @returns ComicSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicSeries(uid: string): CancelablePromise<ComicSeriesFullResponse | Error>;
    /**
     * Pagination over comic series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicSeries(pageNumber?: number, pageSize?: number): CancelablePromise<ComicSeriesBaseResponse | Error>;
    /**
     * Searching comic series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicSeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicSeries(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ComicSeriesBaseResponse>;
}
