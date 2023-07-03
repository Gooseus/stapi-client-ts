import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PerformerService {
    /**
     * @deprecated
     * Retrieval of a single performer
     * @param uid Performer unique ID
     * @returns PerformerFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetPerformer(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/performer',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over performers
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PagePerformers(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/performer/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching performers
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns PerformerBaseResponse OK
     * @throws ApiError
     */
    static v1SearchPerformers(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/performer/search',
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
     * Retrieval of a single performer (V2)
     * @param uid Performer unique ID
     * @returns PerformerV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetPerformer(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/performer',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns PerformerV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PagePerformers(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/performer/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching performers (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns PerformerV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchPerformers(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/performer/search',
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
