import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MagazineService {
    /**
     * Retrieval of a single magazine
     * @param uid Magazine unique ID
     * @returns MagazineFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMagazine(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazine',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MagazineBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMagazines(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/magazine/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MagazineBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMagazines(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/magazine/search',
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
