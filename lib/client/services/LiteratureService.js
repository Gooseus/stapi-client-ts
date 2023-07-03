import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LiteratureService {
    /**
     * Retrieval of a single literature
     * @param uid Literature unique ID
     * @returns LiteratureFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetLiterature(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/literature',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LiteratureBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageLiterature(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/literature/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching literature
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LiteratureBaseResponse OK
     * @throws ApiError
     */
    static v1SearchLiterature(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/literature/search',
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
