/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookSeriesBaseResponse } from '../models/BookSeriesBaseResponse';
import type { BookSeriesFullResponse } from '../models/BookSeriesFullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookSeriesService {

    /**
     * Retrieval of a single book series
     * @param uid Book series unique ID
     * @returns BookSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetBookSeries(
        uid: string,
    ): CancelablePromise<BookSeriesFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookSeries',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageBookSeries(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<BookSeriesBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookSeries/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookSeriesBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchBookSeries(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<BookSeriesBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/bookSeries/search',
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
