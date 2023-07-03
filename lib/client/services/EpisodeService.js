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
    static v1GetEpisode(uid) {
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
    static v1PageEpisodes(pageNumber, pageSize) {
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
    static v1SearchEpisodes(pageNumber, pageSize, sort, formData) {
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
