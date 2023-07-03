import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BookSeriesService {
    /**
     * Retrieval of a single book series
     * @param uid Book series unique ID
     * @returns BookSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetBookSeries(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookSeries',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageBookSeries(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookSeries/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching book series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookSeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchBookSeries(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/bookSeries/search',
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
