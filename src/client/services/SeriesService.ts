/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SeriesBaseResponse } from '../models/SeriesBaseResponse';
import type { SeriesFullResponse } from '../models/SeriesFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeriesService {

    /**
     * Retrieval of a single series
     * @param uid Series unique ID
     * @returns SeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSeries(
        uid: string,
    ): CancelablePromise<SeriesFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/series',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSeries(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SeriesBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/series/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeriesBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchSeries(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SeriesBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/series/search',
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
