/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { MedicalConditionBaseResponse } from '../models/MedicalConditionBaseResponse';
import type { MedicalConditionFullResponse } from '../models/MedicalConditionFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MedicalConditionService {

    /**
     * Retrieval of a single medical condition
     * @param uid Medical condition unique ID
     * @returns MedicalConditionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetMedicalCondition(
        uid: string,
    ): CancelablePromise<MedicalConditionFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/medicalCondition',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over medical conditions
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MedicalConditionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageMedicalConditions(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<MedicalConditionBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/medicalCondition/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching medical conditions
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MedicalConditionBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchMedicalConditions(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<MedicalConditionBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/medicalCondition/search',
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
