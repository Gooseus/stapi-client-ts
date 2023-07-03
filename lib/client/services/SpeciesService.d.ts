import type { Error } from '../models/Error';
import type { SpeciesBaseResponse } from '../models/SpeciesBaseResponse';
import type { SpeciesFullResponse } from '../models/SpeciesFullResponse';
import type { SpeciesV2BaseResponse } from '../models/SpeciesV2BaseResponse';
import type { SpeciesV2FullResponse } from '../models/SpeciesV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SpeciesService {
    /**
     * @deprecated
     * Retrieval of a single species
     * @param uid Species unique ID
     * @returns SpeciesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSpecies(uid: string): CancelablePromise<SpeciesFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over species
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSpecies(pageNumber?: number, pageSize?: number): CancelablePromise<SpeciesBaseResponse | Error>;
    /**
     * @deprecated
     * Searching species
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpeciesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSpecies(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<SpeciesBaseResponse>;
    /**
     * Retrieval of a single species (V2)
     * @param uid Species unique ID
     * @returns SpeciesV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetSpecies(uid: string): CancelablePromise<SpeciesV2FullResponse | Error>;
    /**
     * Pagination over species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageSpecies(pageNumber?: number, pageSize?: number): CancelablePromise<SpeciesV2BaseResponse | Error>;
    /**
     * Searching species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpeciesV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchSpecies(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<SpeciesV2BaseResponse>;
}
