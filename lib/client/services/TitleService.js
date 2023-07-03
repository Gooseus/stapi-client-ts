import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TitleService {
    /**
     * @deprecated
     * Retrieval of a single title
     * @param uid Title unique ID
     * @returns TitleFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTitle(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/title',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over titles
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TitleBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTitles(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/title/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching titles
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TitleBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTitles(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/title/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * Retrieval of a single title (V2)
     * @param uid Title unique ID
     * @returns TitleV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetTitle(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/title',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over titles (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TitleV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageTitles(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/title/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching titles (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TitleV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchTitles(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/title/search',
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
