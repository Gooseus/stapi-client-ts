import type { Error } from '../models/Error';
import type { OrganizationBaseResponse } from '../models/OrganizationBaseResponse';
import type { OrganizationFullResponse } from '../models/OrganizationFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class OrganizationService {
    /**
     * Retrieval of a single organization
     * @param uid Organization unique ID
     * @returns OrganizationFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetOrganization(uid: string): CancelablePromise<OrganizationFullResponse | Error>;
    /**
     * Pagination over organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns OrganizationBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageOrganizations(pageNumber?: number, pageSize?: number): CancelablePromise<OrganizationBaseResponse | Error>;
    /**
     * Searching organizations
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns OrganizationBaseResponse OK
     * @throws ApiError
     */
    static v1SearchOrganizations(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<OrganizationBaseResponse>;
}
