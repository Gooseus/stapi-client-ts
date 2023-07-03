import type { Error } from '../models/Error';
import type { OccupationBaseResponse } from '../models/OccupationBaseResponse';
import type { OccupationFullResponse } from '../models/OccupationFullResponse';
import type { OccupationV2BaseResponse } from '../models/OccupationV2BaseResponse';
import type { OccupationV2FullResponse } from '../models/OccupationV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OccupationService {
    /**
     * @deprecated
     * Retrieval of a single occupation
     * @param uid Occupation unique ID
     * @returns OccupationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetOccupation(uid: string): CancelablePromise<OccupationFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageOccupations(pageNumber?: number, pageSize?: number): CancelablePromise<OccupationBaseResponse | Error>;
    /**
     * @deprecated
     * Searching occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OccupationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchOccupations(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<OccupationBaseResponse>;
    /**
     * Retrieval of a single occupation (V2)
     * @param uid Occupation unique ID
     * @returns OccupationV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetOccupation(uid: string): CancelablePromise<OccupationV2FullResponse | Error>;
    /**
     * Pagination over occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageOccupations(pageNumber?: number, pageSize?: number): CancelablePromise<OccupationV2BaseResponse | Error>;
    /**
     * Searching occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OccupationV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchOccupations(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<OccupationV2BaseResponse>;
}
