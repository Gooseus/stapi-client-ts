/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { MaterialBaseResponse } from '../models/MaterialBaseResponse';
import type { MaterialFullResponse } from '../models/MaterialFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaterialService {

    /**
     * Retrieval of a single material
     * @param uid Material unique ID
     * @returns MaterialFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetMaterial(
        uid: string,
    ): CancelablePromise<MaterialFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/material',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MaterialBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageMaterials(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<MaterialBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/material/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MaterialBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchMaterials(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<MaterialBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/material/search',
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
