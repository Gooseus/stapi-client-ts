import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MaterialService {
    /**
     * Retrieval of a single material
     * @param uid Material unique ID
     * @returns MaterialFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMaterial(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/material',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MaterialBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMaterials(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/material/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MaterialBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMaterials(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/material/search',
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
