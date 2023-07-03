/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { OrganizationBaseResponse } from '../models/OrganizationBaseResponse';
import type { OrganizationFullResponse } from '../models/OrganizationFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OrganizationService {

    /**
     * Retrieval of a single organization
     * @param uid Organization unique ID
     * @returns OrganizationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetOrganization(
        uid: string,
    ): CancelablePromise<OrganizationFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/organization',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OrganizationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageOrganizations(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<OrganizationBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/organization/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OrganizationBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchOrganizations(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<OrganizationBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/organization/search',
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
