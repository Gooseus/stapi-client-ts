import type { Error } from '../models/Error';
import type { SeriesBaseResponse } from '../models/SeriesBaseResponse';
import type { SeriesFullResponse } from '../models/SeriesFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SeriesService {
    /**
     * Retrieval of a single series
     * @param uid Series unique ID
     * @returns SeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSeries(uid: string): CancelablePromise<SeriesFullResponse | Error>;
    /**
     * Pagination over series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSeries(pageNumber?: number, pageSize?: number): CancelablePromise<SeriesBaseResponse | Error>;
    /**
     * Searching series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSeries(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<SeriesBaseResponse>;
}
