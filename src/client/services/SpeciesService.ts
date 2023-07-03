/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SpeciesBaseResponse } from '../models/SpeciesBaseResponse';
import type { SpeciesFullResponse } from '../models/SpeciesFullResponse';
import type { SpeciesV2BaseResponse } from '../models/SpeciesV2BaseResponse';
import type { SpeciesV2FullResponse } from '../models/SpeciesV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpeciesService {

    /**
     * @deprecated
     * Retrieval of a single species
     * @param uid Species unique ID
     * @returns SpeciesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSpecies(
        uid: string,
    ): CancelablePromise<SpeciesFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/species',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over species
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSpecies(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpeciesBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

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
    public static v1SearchSpecies(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpeciesBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

    /**
     * Retrieval of a single species (V2)
     * @param uid Species unique ID
     * @returns SpeciesV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetSpecies(
        uid: string,
    ): CancelablePromise<SpeciesV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/species',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageSpecies(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpeciesV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpeciesV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchSpecies(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpeciesV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }

}
