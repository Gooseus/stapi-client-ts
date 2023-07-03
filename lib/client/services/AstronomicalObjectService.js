import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AstronomicalObjectService {
    /**
     * @deprecated
     * Retrieval of a single astronomical object
     * @param uid Astronomical object's unique ID
     * @returns AstronomicalObjectFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetAstronomicalObject(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/astronomicalObject',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over astronomical objects
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AstronomicalObjectBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageAstronomicalObjects(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/astronomicalObject/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching astronomical objects
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AstronomicalObjectBaseResponse OK
     * @throws ApiError
     */
    static v1SearchAstronomicalObjects(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/astronomicalObject/search',
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
     * Retrieval of a single astronomical object (V2)
     * @param uid Astronomical object's unique ID
     * @returns AstronomicalObjectV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetAstronomicalObject(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/astronomicalObject',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over astronomical objects (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AstronomicalObjectV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageAstronomicalObjects(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/astronomicalObject/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching astronomical objects (v2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AstronomicalObjectV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchAstronomicalObjects(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/astronomicalObject/search',
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
