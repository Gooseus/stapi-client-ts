/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EpisodeBaseResponse } from '../models/EpisodeBaseResponse';
import type { EpisodeFullResponse } from '../models/EpisodeFullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EpisodeService {

    /**
     * Retrieval of a single episode
     * @param uid Episode unique ID
     * @returns EpisodeFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetEpisode(
        uid: string,
    ): CancelablePromise<EpisodeFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/episode',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over episodes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns EpisodeBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageEpisodes(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<EpisodeBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/episode/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching episodes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns EpisodeBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchEpisodes(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<EpisodeBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/episode/search',
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
