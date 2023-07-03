/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SeasonBaseResponse } from '../models/SeasonBaseResponse';
import type { SeasonFullResponse } from '../models/SeasonFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeasonService {

    /**
     * Retrieval of a single season
     * @param uid Season unique ID
     * @returns SeasonFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSeason(
        uid: string,
    ): CancelablePromise<SeasonFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/season',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeasonBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSeasons(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SeasonBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/season/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeasonBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchSeasons(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SeasonBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/season/search',
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
