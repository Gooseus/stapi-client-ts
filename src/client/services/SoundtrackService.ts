/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { SoundtrackBaseResponse } from '../models/SoundtrackBaseResponse';
import type { SoundtrackFullResponse } from '../models/SoundtrackFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SoundtrackService {

    /**
     * Retrieval of a single soundtrack
     * @param uid Soundtrack unique ID
     * @returns SoundtrackFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetSoundtrack(
        uid: string,
    ): CancelablePromise<SoundtrackFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/soundtrack',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over soundtracks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SoundtrackBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageSoundtracks(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<SoundtrackBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/soundtrack/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching soundtracks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SoundtrackBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchSoundtracks(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<SoundtrackBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/soundtrack/search',
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
