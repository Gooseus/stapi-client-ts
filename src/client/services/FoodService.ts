/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { FoodBaseResponse } from '../models/FoodBaseResponse';
import type { FoodFullResponse } from '../models/FoodFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FoodService {

    /**
     * Retrieval of a single food
     * @param uid Food unique ID
     * @returns FoodFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetFood(
        uid: string,
    ): CancelablePromise<FoodFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/food',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns FoodBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageFoods(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<FoodBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/food/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns FoodBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchFoods(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<FoodBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/food/search',
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
