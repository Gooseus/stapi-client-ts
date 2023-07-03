/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConflictBaseResponse } from '../models/ConflictBaseResponse';
import type { ConflictFullResponse } from '../models/ConflictFullResponse';
import type { ConflictV2FullResponse } from '../models/ConflictV2FullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConflictService {

    /**
     * @deprecated
     * Retrieval of a single conflict
     * @param uid Conflict unique ID
     * @returns ConflictFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetConflict(
        uid: string,
    ): CancelablePromise<ConflictFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/conflict',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ConflictBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageConflicts(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<ConflictBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/conflict/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ConflictBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchConflicts(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<ConflictBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/conflict/search',
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
     * Retrieval of a single conflict (V2)
     * @param uid Conflict unique ID
     * @returns ConflictV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetConflict(
        uid: string,
    ): CancelablePromise<ConflictV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/conflict',
            query: {
                'uid': uid,
            },
        });
    }

}
