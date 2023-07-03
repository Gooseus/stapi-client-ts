import type { Error } from '../models/Error';
import type { TechnologyBaseResponse } from '../models/TechnologyBaseResponse';
import type { TechnologyFullResponse } from '../models/TechnologyFullResponse';
import type { TechnologyV2BaseResponse } from '../models/TechnologyV2BaseResponse';
import type { TechnologyV2FullResponse } from '../models/TechnologyV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TechnologyService {
    /**
     * @deprecated
     * Retrieval of a single technology piece
     * @param uid Technology unique ID
     * @returns TechnologyFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTechnology(uid: string): CancelablePromise<TechnologyFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over technology pieces
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TechnologyBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTechnology(pageNumber?: number, pageSize?: number): CancelablePromise<TechnologyBaseResponse | Error>;
    /**
     * @deprecated
     * Searching technology pieces
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TechnologyBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTechnology(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TechnologyBaseResponse>;
    /**
     * Retrieval of a single technology piece (V2)
     * @param uid Technology unique ID
     * @returns TechnologyV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetTechnology(uid: string): CancelablePromise<TechnologyV2FullResponse | Error>;
    /**
     * Pagination over technology pieces (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TechnologyV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageTechnology(pageNumber?: number, pageSize?: number): CancelablePromise<TechnologyV2BaseResponse | Error>;
    /**
     * Searching technology pieces (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TechnologyV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchTechnology(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TechnologyV2BaseResponse>;
}
