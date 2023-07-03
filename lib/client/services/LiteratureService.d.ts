import type { Error } from '../models/Error';
import type { LiteratureBaseResponse } from '../models/LiteratureBaseResponse';
import type { LiteratureFullResponse } from '../models/LiteratureFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LiteratureService {
    /**
     * Retrieval of a single literature
     * @param uid Literature unique ID
     * @returns LiteratureFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetLiterature(uid: string): CancelablePromise<LiteratureFullResponse | Error>;
    /**
     * Pagination over literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LiteratureBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageLiterature(pageNumber?: number, pageSize?: number): CancelablePromise<LiteratureBaseResponse | Error>;
    /**
     * Searching literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LiteratureBaseResponse OK
     * @throws ApiError
     */
    static v1SearchLiterature(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<LiteratureBaseResponse>;
}
