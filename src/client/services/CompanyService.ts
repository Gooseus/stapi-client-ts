/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompanyBaseResponse } from '../models/CompanyBaseResponse';
import type { CompanyFullResponse } from '../models/CompanyFullResponse';
import type { CompanyV2BaseResponse } from '../models/CompanyV2BaseResponse';
import type { CompanyV2FullResponse } from '../models/CompanyV2FullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompanyService {

    /**
     * @deprecated
     * Retrieval of a single company
     * @param uid Company unique ID
     * @returns CompanyFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetCompany(
        uid: string,
    ): CancelablePromise<CompanyFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/company',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over companies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CompanyBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageCompanies(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<CompanyBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/company/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching companies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CompanyBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchCompanies(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<CompanyBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/company/search',
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
     * Retrieval of a single company (V2)
     * @param uid Company unique ID
     * @returns CompanyV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetCompany(
        uid: string,
    ): CancelablePromise<CompanyV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/company',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over companies (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CompanyV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageCompanies(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<CompanyV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/company/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching companies (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CompanyV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchCompanies(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<CompanyV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/company/search',
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
