import type { Error } from '../models/Error';
import type { MaterialBaseResponse } from '../models/MaterialBaseResponse';
import type { MaterialFullResponse } from '../models/MaterialFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MaterialService {
    /**
     * Retrieval of a single material
     * @param uid Material unique ID
     * @returns MaterialFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMaterial(uid: string): CancelablePromise<MaterialFullResponse | Error>;
    /**
     * Pagination over materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MaterialBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMaterials(pageNumber?: number, pageSize?: number): CancelablePromise<MaterialBaseResponse | Error>;
    /**
     * Searching materials
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MaterialBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMaterials(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<MaterialBaseResponse>;
}
