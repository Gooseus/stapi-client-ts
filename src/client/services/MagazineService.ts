/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { MagazineBaseResponse } from '../models/MagazineBaseResponse';
import type { MagazineFullResponse } from '../models/MagazineFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MagazineService {

    /**
     * Retrieval of a single magazine
     * @param uid Magazine unique ID
     * @returns MagazineFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetMagazine(
        uid: string,
    ): CancelablePromise<MagazineFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazine',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MagazineBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageMagazines(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<MagazineBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazine/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MagazineBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchMagazines(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<MagazineBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/magazine/search',
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
