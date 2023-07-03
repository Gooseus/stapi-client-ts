/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SpacecraftClassBaseResponse } from '../models/SpacecraftClassBaseResponse';
import type { SpacecraftClassFullResponse } from '../models/SpacecraftClassFullResponse';
import type { SpacecraftClassV2BaseResponse } from '../models/SpacecraftClassV2BaseResponse';
import type { SpacecraftClassV2FullResponse } from '../models/SpacecraftClassV2FullResponse';
import type { SpacecraftClassV3FullResponse } from '../models/SpacecraftClassV3FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SpacecraftClassService {

    /**
     * @deprecated
     * Retrieval of a single spacecraft class
     * @param uid SpacecraftClass unique ID
     * @returns SpacecraftClassFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSpacecraftClass(
        uid: string,
    ): CancelablePromise<SpacecraftClassFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over spacecraft classes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftClassBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSpacecraftClasses(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpacecraftClassBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraftClass/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching spacecraft classes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftClassBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchSpacecraftClasses(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpacecraftClassBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/spacecraftClass/search',
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
     * @deprecated
     * Retrieval of a single spacecraft class (V2)
     * @param uid SpacecraftClass unique ID
     * @returns SpacecraftClassV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetSpacecraftClass(
        uid: string,
    ): CancelablePromise<SpacecraftClassV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over spacecraft classes (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftClassV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageSpacecraftClasses(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SpacecraftClassV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraftClass/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching spacecraft classes (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftClassV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchSpacecraftClasses(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SpacecraftClassV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/spacecraftClass/search',
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
     * Retrieval of a single spacecraft class (V3)
     * @param uid Spacecraft class unique ID
     * @returns SpacecraftClassV3FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v3GetSpacecraftClass(
        uid: string,
    ): CancelablePromise<SpacecraftClassV3FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }

}
