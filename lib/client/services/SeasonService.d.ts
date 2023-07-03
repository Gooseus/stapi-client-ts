import type { Error } from '../models/Error';
import type { SeasonBaseResponse } from '../models/SeasonBaseResponse';
import type { SeasonFullResponse } from '../models/SeasonFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SeasonService {
    /**
     * Retrieval of a single season
     * @param uid Season unique ID
     * @returns SeasonFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSeason(uid: string): CancelablePromise<SeasonFullResponse | Error>;
    /**
     * Pagination over seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeasonBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSeasons(pageNumber?: number, pageSize?: number): CancelablePromise<SeasonBaseResponse | Error>;
    /**
     * Searching seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeasonBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSeasons(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<SeasonBaseResponse>;
}
