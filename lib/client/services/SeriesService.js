import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SeriesService {
    /**
     * Retrieval of a single series
     * @param uid Series unique ID
     * @returns SeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSeries(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/series',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSeries(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/series/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSeries(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/series/search',
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
