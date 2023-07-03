import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BookCollectionService {
    /**
     * Retrieval of a single book collection
     * @param uid Book collection unique ID
     * @returns BookCollectionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetBookCollection(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookCollection',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookCollectionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageBookCollections(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/bookCollection/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookCollectionBaseResponse OK
     * @throws ApiError
     */
    static v1SearchBookCollections(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/bookCollection/search',
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
