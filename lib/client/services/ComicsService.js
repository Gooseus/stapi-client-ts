import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ComicsService {
    /**
     * Retrieval of a single comics
     * @param uid Comics unique ID
     * @returns ComicsFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComics(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comics',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over comics
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicsBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComics(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comics/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching comics
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicsBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComics(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/comics/search',
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
