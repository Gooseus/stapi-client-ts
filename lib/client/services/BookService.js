import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BookService {
    /**
     * @deprecated
     * Retrieval of a single book
     * @param uid Book unique ID
     * @returns BookFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetBook(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/book',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over books
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageBooks(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/book/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching books
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookBaseResponse OK
     * @throws ApiError
     */
    static v1SearchBooks(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/book/search',
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
     * Retrieval of a single book (V2)
     * @param uid Book unique ID
     * @returns BookV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetBook(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/book',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over books (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageBooks(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/book/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching books (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchBooks(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/book/search',
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
