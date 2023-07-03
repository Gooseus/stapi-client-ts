import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ElementService {
    /**
     * @deprecated
     * Retrieval of a single element
     * @param uid Element unique ID
     * @returns ElementFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetElement(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/element',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageElements(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/element/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementBaseResponse OK
     * @throws ApiError
     */
    static v1SearchElements(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/element/search',
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
     * Retrieval of a single element (V2)
     * @param uid Element unique ID
     * @returns ElementV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetElement(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/element',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageElements(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/element/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchElements(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/element/search',
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
