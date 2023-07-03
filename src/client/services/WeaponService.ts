/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { WeaponBaseResponse } from '../models/WeaponBaseResponse';
import type { WeaponFullResponse } from '../models/WeaponFullResponse';
import type { WeaponV2BaseResponse } from '../models/WeaponV2BaseResponse';
import type { WeaponV2FullResponse } from '../models/WeaponV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WeaponService {

    /**
     * @deprecated
     * Retrieval of a single weapon
     * @param uid Weapon unique ID
     * @returns WeaponFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetWeapon(
        uid: string,
    ): CancelablePromise<WeaponFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/weapon',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over weapons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns WeaponBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageWeapons(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<WeaponBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/weapon/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching weapons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns WeaponBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchWeapons(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<WeaponBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/weapon/search',
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
     * Retrieval of a single weapon (V2)
     * @param uid Weapon unique ID
     * @returns WeaponV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetWeapon(
        uid: string,
    ): CancelablePromise<WeaponV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/weapon',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over weapons (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns WeaponV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageWeapons(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<WeaponV2BaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/weapon/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching weapons (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns WeaponV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchWeapons(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<WeaponV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/weapon/search',
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
