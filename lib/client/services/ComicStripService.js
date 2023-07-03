import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ComicStripService {
    /**
     * Retrieval of a single comic strip
     * @param uid Comic strip unique ID
     * @returns ComicStripFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicStrip(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicStrip',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicStripBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicStrips(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicStrip/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching comic strips
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicStripBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicStrips(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/comicStrip/search',
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
