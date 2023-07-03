import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationService {
    /**
     * @deprecated
     * Retrieval of a single location
     * @param uid Location unique ID
     * @returns LocationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetLocation(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/location',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over locations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LocationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageLocations(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/location/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching locations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LocationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchLocations(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/location/search',
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
     * Retrieval of a single location (V2)
     * @param uid Location unique ID
     * @returns LocationV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetLocation(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/location',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over locations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns LocationV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageLocations(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/location/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching locations (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns LocationV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchLocations(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/location/search',
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
