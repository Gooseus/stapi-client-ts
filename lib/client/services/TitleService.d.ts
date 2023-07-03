import type { Error } from '../models/Error';
import type { TitleBaseResponse } from '../models/TitleBaseResponse';
import type { TitleFullResponse } from '../models/TitleFullResponse';
import type { TitleV2BaseResponse } from '../models/TitleV2BaseResponse';
import type { TitleV2FullResponse } from '../models/TitleV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TitleService {
    /**
     * @deprecated
     * Retrieval of a single title
     * @param uid Title unique ID
     * @returns TitleFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTitle(uid: string): CancelablePromise<TitleFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over titles
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TitleBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTitles(pageNumber?: number, pageSize?: number): CancelablePromise<TitleBaseResponse | Error>;
    /**
     * @deprecated
     * Searching titles
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TitleBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTitles(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TitleBaseResponse>;
    /**
     * Retrieval of a single title (V2)
     * @param uid Title unique ID
     * @returns TitleV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetTitle(uid: string): CancelablePromise<TitleV2FullResponse | Error>;
    /**
     * Pagination over titles (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TitleV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageTitles(pageNumber?: number, pageSize?: number): CancelablePromise<TitleV2BaseResponse | Error>;
    /**
     * Searching titles (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TitleV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchTitles(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TitleV2BaseResponse>;
}
