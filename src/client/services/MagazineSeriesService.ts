/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { MagazineSeriesBaseResponse } from '../models/MagazineSeriesBaseResponse';
import type { MagazineSeriesFullResponse } from '../models/MagazineSeriesFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MagazineSeriesService {

    /**
     * Retrieval of a single magazine series
     * @param uid Magazine series unique ID
     * @returns MagazineSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetMagazineSeries(
        uid: string,
    ): CancelablePromise<MagazineSeriesFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazineSeries',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over magazine series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MagazineSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageMagazineSeries(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<MagazineSeriesBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazineSeries/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching magazine series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MagazineSeriesBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchMagazineSeries(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<MagazineSeriesBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/magazineSeries/search',
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
