import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CompanyService {
    /**
     * @deprecated
     * Retrieval of a single company
     * @param uid Company unique ID
     * @returns CompanyFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetCompany(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/company',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over companies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CompanyBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageCompanies(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/company/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching companies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CompanyBaseResponse OK
     * @throws ApiError
     */
    static v1SearchCompanies(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/company/search',
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
     * Retrieval of a single company (V2)
     * @param uid Company unique ID
     * @returns CompanyV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetCompany(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/company',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over companies (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns CompanyV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageCompanies(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/company/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching companies (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns CompanyV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchCompanies(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/company/search',
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
