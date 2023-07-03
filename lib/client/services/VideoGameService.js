import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VideoGameService {
    /**
     * Retrieval of a single video game
     * @param uid VideoGame unique ID
     * @returns VideoGameFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetVideoGame(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoGame',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over video games
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoGameBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageVideoGames(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoGame/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching video games
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoGameBaseResponse OK
     * @throws ApiError
     */
    static v1SearchVideoGames(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/videoGame/search',
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
