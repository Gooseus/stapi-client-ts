import type { Error } from '../models/Error';
import type { PerformerBaseResponse } from '../models/PerformerBaseResponse';
import type { PerformerFullResponse } from '../models/PerformerFullResponse';
import type { PerformerV2BaseResponse } from '../models/PerformerV2BaseResponse';
import type { PerformerV2FullResponse } from '../models/PerformerV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PerformerService {
    /**
     * @deprecated
     * Retrieval of a single performer
     * @param uid Performer unique ID
     * @returns PerformerFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetPerformer(uid: string): CancelablePromise<PerformerFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over performers
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PagePerformers(pageNumber?: number, pageSize?: number): CancelablePromise<PerformerBaseResponse | Error>;
    /**
     * @deprecated
     * Searching performers
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns PerformerBaseResponse OK
     * @throws ApiError
     */
    static v1SearchPerformers(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<PerformerBaseResponse>;
    /**
     * Retrieval of a single performer (V2)
     * @param uid Performer unique ID
     * @returns PerformerV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetPerformer(uid: string): CancelablePromise<PerformerV2FullResponse | Error>;
    /**
     * Pagination over performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PagePerformers(pageNumber?: number, pageSize?: number): CancelablePromise<PerformerV2BaseResponse | Error>;
    /**
     * Searching performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns PerformerV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchPerformers(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<PerformerV2BaseResponse>;
}
