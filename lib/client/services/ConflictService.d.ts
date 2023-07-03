import type { ConflictBaseResponse } from '../models/ConflictBaseResponse';
import type { ConflictFullResponse } from '../models/ConflictFullResponse';
import type { ConflictV2FullResponse } from '../models/ConflictV2FullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ConflictService {
    /**
     * @deprecated
     * Retrieval of a single conflict
     * @param uid Conflict unique ID
     * @returns ConflictFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetConflict(uid: string): CancelablePromise<ConflictFullResponse | Error>;
    /**
     * Pagination over conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ConflictBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageConflicts(pageNumber?: number, pageSize?: number): CancelablePromise<ConflictBaseResponse | Error>;
    /**
     * Searching conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ConflictBaseResponse OK
     * @throws ApiError
     */
    static v1SearchConflicts(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ConflictBaseResponse>;
    /**
     * Retrieval of a single conflict (V2)
     * @param uid Conflict unique ID
     * @returns ConflictV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetConflict(uid: string): CancelablePromise<ConflictV2FullResponse | Error>;
}
