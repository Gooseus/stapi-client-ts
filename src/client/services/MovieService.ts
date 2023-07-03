/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { MovieBaseResponse } from '../models/MovieBaseResponse';
import type { MovieFullResponse } from '../models/MovieFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MovieService {

    /**
     * Retrieval of a single movie
     * @param uid Movie unique ID
     * @returns MovieFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetMovie(
        uid: string,
    ): CancelablePromise<MovieFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/movie',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over movies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MovieBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageMovies(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<MovieBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/movie/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching movies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MovieBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchMovies(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<MovieBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/movie/search',
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
