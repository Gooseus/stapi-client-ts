/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookBaseResponse } from '../models/BookBaseResponse';
import type { BookFullResponse } from '../models/BookFullResponse';
import type { BookV2BaseResponse } from '../models/BookV2BaseResponse';
import type { BookV2FullResponse } from '../models/BookV2FullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BookService {

    /**
     * @deprecated
     * Retrieval of a single book
     * @param uid Book unique ID
     * @returns BookFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetBook(
        uid: string,
    ): CancelablePromise<BookFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/book',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over books
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageBooks(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<BookBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/book/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching books
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchBooks(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<BookBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/book/search',
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
     * Retrieval of a single book (V2)
     * @param uid Book unique ID
     * @returns BookV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetBook(
        uid: string,
    ): CancelablePromise<BookV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/book',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over books (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageBooks(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<BookV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/book/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching books (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchBooks(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<BookV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/book/search',
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
