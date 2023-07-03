import type { Error } from '../models/Error';
import type { LocationBaseResponse } from '../models/LocationBaseResponse';
import type { LocationFullResponse } from '../models/LocationFullResponse';
import type { LocationV2BaseResponse } from '../models/LocationV2BaseResponse';
import type { LocationV2FullResponse } from '../models/LocationV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class LocationService {
    /**
     * @deprecated
     * Retrieval of a single location
     * @param uid Location unique ID
     * @returns LocationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetLocation(uid: string): CancelablePromise<LocationFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over locations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LocationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageLocations(pageNumber?: number, pageSize?: number): CancelablePromise<LocationBaseResponse | Error>;
    /**
     * @deprecated
     * Searching locations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LocationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchLocations(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<LocationBaseResponse>;
    /**
     * Retrieval of a single location (V2)
     * @param uid Location unique ID
     * @returns LocationV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetLocation(uid: string): CancelablePromise<LocationV2FullResponse | Error>;
    /**
     * Pagination over locations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LocationV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageLocations(pageNumber?: number, pageSize?: number): CancelablePromise<LocationV2BaseResponse | Error>;
    /**
     * Searching locations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LocationV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchLocations(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<LocationV2BaseResponse>;
}
