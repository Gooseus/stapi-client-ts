import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrganizationService {
    /**
     * Retrieval of a single organization
     * @param uid Organization unique ID
     * @returns OrganizationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetOrganization(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/organization',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OrganizationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageOrganizations(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/organization/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OrganizationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchOrganizations(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/organization/search',
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
