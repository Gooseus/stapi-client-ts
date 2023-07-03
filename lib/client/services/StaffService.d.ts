import type { Error } from '../models/Error';
import type { StaffBaseResponse } from '../models/StaffBaseResponse';
import type { StaffFullResponse } from '../models/StaffFullResponse';
import type { StaffV2BaseResponse } from '../models/StaffV2BaseResponse';
import type { StaffV2FullResponse } from '../models/StaffV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class StaffService {
    /**
     * @deprecated
     * Retrieval of a single staff member
     * @param uid Staff unique ID
     * @returns StaffFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetStaff(uid: string): CancelablePromise<StaffFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over staff members
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageStaff(pageNumber?: number, pageSize?: number): CancelablePromise<StaffBaseResponse | Error>;
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
    static v1SearchStaff(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<StaffBaseResponse>;
    /**
     * Retrieval of a single staff member (V2)
     * @param uid Staff unique ID
     * @returns StaffV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetStaff(uid: string): CancelablePromise<StaffV2FullResponse | Error>;
    /**
     * Pagination over staff members (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns StaffV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageStaff(pageNumber?: number, pageSize?: number): CancelablePromise<StaffV2BaseResponse | Error>;
    /**
     * Searching staff members (v2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns StaffV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchStaff(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<StaffV2BaseResponse>;
}
