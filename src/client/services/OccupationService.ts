/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { OccupationBaseResponse } from '../models/OccupationBaseResponse';
import type { OccupationFullResponse } from '../models/OccupationFullResponse';
import type { OccupationV2BaseResponse } from '../models/OccupationV2BaseResponse';
import type { OccupationV2FullResponse } from '../models/OccupationV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OccupationService {

    /**
     * @deprecated
     * Retrieval of a single occupation
     * @param uid Occupation unique ID
     * @returns OccupationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetOccupation(
        uid: string,
    ): CancelablePromise<OccupationFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/occupation',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageOccupations(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<OccupationBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/occupation/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

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
    public static v1SearchOccupations(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<OccupationBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/occupation/search',
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
     * Retrieval of a single occupation (V2)
     * @param uid Occupation unique ID
     * @returns OccupationV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetOccupation(
        uid: string,
    ): CancelablePromise<OccupationV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/occupation',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageOccupations(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<OccupationV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/occupation/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OccupationV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchOccupations(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<OccupationV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/occupation/search',
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
