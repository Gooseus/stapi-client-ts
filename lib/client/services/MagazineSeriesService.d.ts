import type { Error } from '../models/Error';
import type { MagazineSeriesBaseResponse } from '../models/MagazineSeriesBaseResponse';
import type { MagazineSeriesFullResponse } from '../models/MagazineSeriesFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MagazineSeriesService {
    /**
     * Retrieval of a single magazine series
     * @param uid Magazine series unique ID
     * @returns MagazineSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMagazineSeries(uid: string): CancelablePromise<MagazineSeriesFullResponse | Error>;
    /**
     * Pagination over magazine series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MagazineSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMagazineSeries(pageNumber?: number, pageSize?: number): CancelablePromise<MagazineSeriesBaseResponse | Error>;
    /**
     * Searching magazine series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MagazineSeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMagazineSeries(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<MagazineSeriesBaseResponse>;
}
