import type { ElementBaseResponse } from '../models/ElementBaseResponse';
import type { ElementFullResponse } from '../models/ElementFullResponse';
import type { ElementV2BaseResponse } from '../models/ElementV2BaseResponse';
import type { ElementV2FullResponse } from '../models/ElementV2FullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ElementService {
    /**
     * @deprecated
     * Retrieval of a single element
     * @param uid Element unique ID
     * @returns ElementFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetElement(uid: string): CancelablePromise<ElementFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageElements(pageNumber?: number, pageSize?: number): CancelablePromise<ElementBaseResponse | Error>;
    /**
     * @deprecated
     * Searching elements
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementBaseResponse OK
     * @throws ApiError
     */
    static v1SearchElements(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ElementBaseResponse>;
    /**
     * Retrieval of a single element (V2)
     * @param uid Element unique ID
     * @returns ElementV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetElement(uid: string): CancelablePromise<ElementV2FullResponse | Error>;
    /**
     * Pagination over elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ElementV2BaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageElements(pageNumber?: number, pageSize?: number): CancelablePromise<ElementV2BaseResponse | Error>;
    /**
     * Searching elements (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ElementV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchElements(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<ElementV2BaseResponse>;
}
