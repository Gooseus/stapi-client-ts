import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ConflictService {
    /**
     * @deprecated
     * Retrieval of a single conflict
     * @param uid Conflict unique ID
     * @returns ConflictFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetConflict(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/conflict',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ConflictBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageConflicts(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/conflict/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching conflicts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ConflictBaseResponse OK
     * @throws ApiError
     */
    static v1SearchConflicts(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/conflict/search',
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
     * Retrieval of a single conflict (V2)
     * @param uid Conflict unique ID
     * @returns ConflictV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetConflict(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/conflict',
            query: {
                'uid': uid,
            },
        });
    }
}
