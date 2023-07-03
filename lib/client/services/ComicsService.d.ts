import type { ComicsBaseResponse } from '../models/ComicsBaseResponse';
import type { ComicsFullResponse } from '../models/ComicsFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ComicsService {
    /**
     * Retrieval of a single comics
     * @param uid Comics unique ID
     * @returns ComicsFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComics(uid: string): CancelablePromise<ComicsFullResponse | Error>;
    /**
     * Pagination over comics
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicsBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComics(pageNumber?: number, pageSize?: number): CancelablePromise<ComicsBaseResponse | Error>;
    /**
     * Searching comics
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicsBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComics(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ComicsBaseResponse>;
}
