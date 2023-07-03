/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { VideoReleaseBaseResponse } from '../models/VideoReleaseBaseResponse';
import type { VideoReleaseFullResponse } from '../models/VideoReleaseFullResponse';
import type { VideoReleaseV2BaseResponse } from '../models/VideoReleaseV2BaseResponse';
import type { VideoReleaseV2FullResponse } from '../models/VideoReleaseV2FullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VideoReleaseService {

    /**
     * @deprecated
     * Retrieval of a single video release
     * @param uid Video release unique ID
     * @returns VideoReleaseFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetVideoRelease(
        uid: string,
    ): CancelablePromise<VideoReleaseFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoRelease',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * @deprecated
     * Pagination over video releases
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageVideoReleases(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<VideoReleaseBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * @deprecated
     * Searching video releases
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoReleaseBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchVideoReleases(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<VideoReleaseBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/videoRelease/search',
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
     * Retrieval of a single video release (V2)
     * @param uid Video release unique ID
     * @returns VideoReleaseV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2GetVideoRelease(
        uid: string,
    ): CancelablePromise<VideoReleaseV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/videoRelease',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v2PageVideoReleases(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<VideoReleaseBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoReleaseV2BaseResponse OK
     * @throws ApiError
     */
    public static v2SearchVideoReleases(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<VideoReleaseV2BaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/videoRelease/search',
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
