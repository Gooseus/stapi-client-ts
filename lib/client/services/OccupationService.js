import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OccupationService {
    /**
     * @deprecated
     * Retrieval of a single occupation
     * @param uid Occupation unique ID
     * @returns OccupationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetOccupation(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/occupation',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageOccupations(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/occupation/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching occupations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OccupationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchOccupations(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/occupation/search',
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
     * Retrieval of a single occupation (V2)
     * @param uid Occupation unique ID
     * @returns OccupationV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetOccupation(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/occupation',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OccupationV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageOccupations(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/occupation/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching occupations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OccupationV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchOccupations(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/occupation/search',
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
