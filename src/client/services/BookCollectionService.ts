/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookCollectionBaseResponse } from '../models/BookCollectionBaseResponse';
import type { BookCollectionFullResponse } from '../models/BookCollectionFullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookCollectionService {

    /**
     * Retrieval of a single book collection
     * @param uid Book collection unique ID
     * @returns BookCollectionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetBookCollection(
        uid: string,
    ): CancelablePromise<BookCollectionFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookCollection',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookCollectionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageBookCollections(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<BookCollectionBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookCollection/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookCollectionBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchBookCollections(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<BookCollectionBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/bookCollection/search',
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
