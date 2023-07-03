import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpeciesService {
    /**
     * @deprecated
     * Retrieval of a single species
     * @param uid Species unique ID
     * @returns SpeciesFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetSpecies(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/species',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over species
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageSpecies(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching species
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpeciesBaseResponse OK
     * @throws ApiError
     */
    static v1SearchSpecies(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/species/search',
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
     * Retrieval of a single species (V2)
     * @param uid Species unique ID
     * @returns SpeciesV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetSpecies(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/species',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns SpeciesV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageSpecies(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/species/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching species (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns SpeciesV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchSpecies(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/species/search',
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
