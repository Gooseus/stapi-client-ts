/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComicStripBaseResponse } from '../models/ComicStripBaseResponse';
import type { ComicStripFullResponse } from '../models/ComicStripFullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ComicStripService {

    /**
     * Retrieval of a single comic strip
     * @param uid Comic strip unique ID
     * @returns ComicStripFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetComicStrip(
        uid: string,
    ): CancelablePromise<ComicStripFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicStrip',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicStripBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageComicStrips(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<ComicStripBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicStrip/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicStripBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchComicStrips(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<ComicStripBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/comicStrip/search',
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
