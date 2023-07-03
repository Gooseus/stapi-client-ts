import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpacecraftService {
    /**
     * @deprecated
     * Retrieval of a single spacecraft
     * @param uid Spacecraft unique ID
     * @returns SpacecraftFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSpacecraft(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraft',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over spacecrafts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSpacecrafts(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/spacecraft/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching spacecrafts
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSpacecrafts(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/spacecraft/search',
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
     * Retrieval of a single spacecraft (V2)
     * @param uid Spacecraft unique ID
     * @returns SpacecraftV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetSpacecraft(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraft',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over spacecrafts (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpacecraftV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageSpacecrafts(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/spacecraft/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching spacecrafts (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpacecraftV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchSpacecrafts(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/spacecraft/search',
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
