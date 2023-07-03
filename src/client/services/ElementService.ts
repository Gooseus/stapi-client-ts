/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ElementBaseResponse } from '../models/ElementBaseResponse';
import type { ElementFullResponse } from '../models/ElementFullResponse';
import type { ElementV2BaseResponse } from '../models/ElementV2BaseResponse';
import type { ElementV2FullResponse } from '../models/ElementV2FullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ElementService {

    /**
     * @deprecated
     * Retrieval of a single element
     * @param uid Element unique ID
     * @returns ElementFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetElement(
        uid: string,
    ): CancelablePromise<ElementFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/element',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageElements(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<ElementBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/element/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchElements(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<ElementBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/element/search',
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
     * Retrieval of a single element (V2)
     * @param uid Element unique ID
     * @returns ElementV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetElement(
        uid: string,
    ): CancelablePromise<ElementV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/element',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageElements(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<ElementV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/element/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchElements(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<ElementV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/element/search',
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
