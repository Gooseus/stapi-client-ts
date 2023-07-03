import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ComicSeriesService {
    /**
     * Retrieval of a single comic series
     * @param uid Comic series unique ID
     * @returns ComicSeriesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicSeries(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicSeries',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over comic series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicSeriesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicSeries(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicSeries/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching comic series
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicSeriesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicSeries(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/comicSeries/search',
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
