/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { PerformerBaseResponse } from '../models/PerformerBaseResponse';
import type { PerformerFullResponse } from '../models/PerformerFullResponse';
import type { PerformerV2BaseResponse } from '../models/PerformerV2BaseResponse';
import type { PerformerV2FullResponse } from '../models/PerformerV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PerformerService {

    /**
     * @deprecated
     * Retrieval of a single performer
     * @param uid Performer unique ID
     * @returns PerformerFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetPerformer(
        uid: string,
    ): CancelablePromise<PerformerFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/performer',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over performers
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PagePerformers(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<PerformerBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/performer/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

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
    public static v1SearchPerformers(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<PerformerBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/performer/search',
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
     * Retrieval of a single performer (V2)
     * @param uid Performer unique ID
     * @returns PerformerV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetPerformer(
        uid: string,
    ): CancelablePromise<PerformerV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/performer',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PagePerformers(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<PerformerV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/performer/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns PerformerV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchPerformers(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<PerformerV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/performer/search',
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
