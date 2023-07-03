import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StaffService {
    /**
     * @deprecated
     * Retrieval of a single staff member
     * @param uid Staff unique ID
     * @returns StaffFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetStaff(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/staff',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over staff members
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageStaff(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/staff/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @deprecated
     * Searching staff members
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns StaffBaseResponse OK
     * @throws ApiError
     */
    static v1SearchStaff(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/staff/search',
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
     * Retrieval of a single staff member (V2)
     * @param uid Staff unique ID
     * @returns StaffV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetStaff(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/staff',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over staff members (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageStaff(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/staff/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching staff members (v2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns StaffV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchStaff(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/staff/search',
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
