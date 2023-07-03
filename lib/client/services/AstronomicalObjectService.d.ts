import type { AstronomicalObjectBaseResponse } from '../models/AstronomicalObjectBaseResponse';
import type { AstronomicalObjectFullResponse } from '../models/AstronomicalObjectFullResponse';
import type { AstronomicalObjectV2BaseResponse } from '../models/AstronomicalObjectV2BaseResponse';
import type { AstronomicalObjectV2FullResponse } from '../models/AstronomicalObjectV2FullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AstronomicalObjectService {
    /**
     * @deprecated
     * Retrieval of a single astronomical object
     * @param uid Astronomical object's unique ID
     * @returns AstronomicalObjectFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetAstronomicalObject(uid: string): CancelablePromise<AstronomicalObjectFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over astronomical objects
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AstronomicalObjectBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageAstronomicalObjects(pageNumber?: number, pageSize?: number): CancelablePromise<AstronomicalObjectBaseResponse | Error>;
    /**
     * @deprecated
     * Searching astronomical objects
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AstronomicalObjectBaseResponse OK
     * @throws ApiError
     */
    static v1SearchAstronomicalObjects(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<AstronomicalObjectBaseResponse>;
    /**
     * Retrieval of a single astronomical object (V2)
     * @param uid Astronomical object's unique ID
     * @returns AstronomicalObjectV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetAstronomicalObject(uid: string): CancelablePromise<AstronomicalObjectV2FullResponse | Error>;
    /**
     * Pagination over astronomical objects (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AstronomicalObjectV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageAstronomicalObjects(pageNumber?: number, pageSize?: number): CancelablePromise<AstronomicalObjectV2BaseResponse | Error>;
    /**
     * Searching astronomical objects (v2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AstronomicalObjectV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchAstronomicalObjects(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<AstronomicalObjectV2BaseResponse>;
}
