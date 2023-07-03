import type { BookSeriesBaseResponse } from '../models/BookSeriesBaseResponse';
import type { BookSeriesFullResponse } from '../models/BookSeriesFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BookSeriesService {
    /**
     * Retrieval of a single book series
     * @param uid Book series unique ID
     * @returns BookSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetBookSeries(uid: string): CancelablePromise<BookSeriesFullResponse | Error>;
    /**
     * Pagination over book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageBookSeries(pageNumber?: number, pageSize?: number): CancelablePromise<BookSeriesBaseResponse | Error>;
    /**
     * Searching book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookSeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchBookSeries(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<BookSeriesBaseResponse>;
}
