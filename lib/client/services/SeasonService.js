import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SeasonService {
    /**
     * Retrieval of a single season
     * @param uid Season unique ID
     * @returns SeasonFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSeason(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/season',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeasonBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSeasons(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/season/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching seasons
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeasonBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSeasons(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/season/search',
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
