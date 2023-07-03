/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SpacecraftBaseResponse } from '../models/SpacecraftBaseResponse';
import type { SpacecraftFullResponse } from '../models/SpacecraftFullResponse';
import type { SpacecraftV2BaseResponse } from '../models/SpacecraftV2BaseResponse';
import type { SpacecraftV2FullResponse } from '../models/SpacecraftV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpacecraftService {

    /**
     * @deprecated
     * Retrieval of a single spacecraft
     * @param uid Spacecraft unique ID
     * @returns SpacecraftFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSpacecraft(
        uid: string,
    ): CancelablePromise<SpacecraftFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraft',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over spacecrafts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSpacecrafts(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpacecraftBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraft/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching spacecrafts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchSpacecrafts(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpacecraftBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/spacecraft/search',
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
     * Retrieval of a single spacecraft (V2)
     * @param uid Spacecraft unique ID
     * @returns SpacecraftV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetSpacecraft(
        uid: string,
    ): CancelablePromise<SpacecraftV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraft',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over spacecrafts (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageSpacecrafts(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpacecraftV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraft/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching spacecrafts (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchSpacecrafts(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpacecraftV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/spacecraft/search',
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
