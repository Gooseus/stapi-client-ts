/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { StaffBaseResponse } from '../models/StaffBaseResponse';
import type { StaffFullResponse } from '../models/StaffFullResponse';
import type { StaffV2BaseResponse } from '../models/StaffV2BaseResponse';
import type { StaffV2FullResponse } from '../models/StaffV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StaffService {

    /**
     * @deprecated
     * Retrieval of a single staff member
     * @param uid Staff unique ID
     * @returns StaffFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetStaff(
        uid: string,
    ): CancelablePromise<StaffFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/staff',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over staff members
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageStaff(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<StaffBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/staff/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching staff members
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns StaffBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchStaff(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<StaffBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/staff/search',
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
     * Retrieval of a single staff member (V2)
     * @param uid Staff unique ID
     * @returns StaffV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetStaff(
        uid: string,
    ): CancelablePromise<StaffV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/staff',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over staff members (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageStaff(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<StaffV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/staff/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching staff members (v2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns StaffV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchStaff(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<StaffV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/staff/search',
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
