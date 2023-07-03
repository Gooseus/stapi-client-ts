import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TechnologyService {
    /**
     * @deprecated
     * Retrieval of a single technology piece
     * @param uid Technology unique ID
     * @returns TechnologyFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTechnology(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/technology',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over technology pieces
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TechnologyBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTechnology(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/technology/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching technology pieces
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TechnologyBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTechnology(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/technology/search',
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
     * Retrieval of a single technology piece (V2)
     * @param uid Technology unique ID
     * @returns TechnologyV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetTechnology(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/technology',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over technology pieces (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TechnologyV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageTechnology(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/technology/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching technology pieces (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TechnologyV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchTechnology(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/technology/search',
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
