import type { Error } from '../models/Error';
import type { MedicalConditionBaseResponse } from '../models/MedicalConditionBaseResponse';
import type { MedicalConditionFullResponse } from '../models/MedicalConditionFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MedicalConditionService {
    /**
     * Retrieval of a single medical condition
     * @param uid Medical condition unique ID
     * @returns MedicalConditionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMedicalCondition(uid: string): CancelablePromise<MedicalConditionFullResponse | Error>;
    /**
     * Pagination over medical conditions
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MedicalConditionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMedicalConditions(pageNumber?: number, pageSize?: number): CancelablePromise<MedicalConditionBaseResponse | Error>;
    /**
     * Searching medical conditions
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MedicalConditionBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMedicalConditions(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<MedicalConditionBaseResponse>;
}
