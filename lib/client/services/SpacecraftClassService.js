import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpacecraftClassService {
    /**
     * @deprecated
     * Retrieval of a single spacecraft class
     * @param uid SpacecraftClass unique ID
     * @returns SpacecraftClassFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSpacecraftClass(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over spacecraft classes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftClassBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSpacecraftClasses(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraftClass/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching spacecraft classes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftClassBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSpacecraftClasses(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/spacecraftClass/search',
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
     * @deprecated
     * Retrieval of a single spacecraft class (V2)
     * @param uid SpacecraftClass unique ID
     * @returns SpacecraftClassV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetSpacecraftClass(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over spacecraft classes (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftClassV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageSpacecraftClasses(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraftClass/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching spacecraft classes (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftClassV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchSpacecraftClasses(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/spacecraftClass/search',
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
     * Retrieval of a single spacecraft class (V3)
     * @param uid Spacecraft class unique ID
     * @returns SpacecraftClassV3FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v3GetSpacecraftClass(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v3/rest/spacecraftClass',
            query: {
                'uid': uid,
            },
        });
    }
}
