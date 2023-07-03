/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { LiteratureBaseResponse } from '../models/LiteratureBaseResponse';
import type { LiteratureFullResponse } from '../models/LiteratureFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LiteratureService {

    /**
     * Retrieval of a single literature
     * @param uid Literature unique ID
     * @returns LiteratureFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetLiterature(
        uid: string,
    ): CancelablePromise<LiteratureFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/literature',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LiteratureBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageLiterature(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<LiteratureBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/literature/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LiteratureBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchLiterature(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<LiteratureBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/literature/search',
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
