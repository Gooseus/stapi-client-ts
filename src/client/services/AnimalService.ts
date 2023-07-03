/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnimalBaseResponse } from '../models/AnimalBaseResponse';
import type { AnimalFullResponse } from '../models/AnimalFullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AnimalService {

    /**
     * Retrieval of a single animal
     * @param uid Animal unique ID
     * @returns AnimalFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetAnimal(
        uid: string,
    ): CancelablePromise<AnimalFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/animal',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over animals
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AnimalBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageAnimals(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<AnimalBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/animal/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching animals
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AnimalBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchAnimals(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<AnimalBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/animal/search',
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
