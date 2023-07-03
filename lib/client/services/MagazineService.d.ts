import type { Error } from '../models/Error';
import type { MagazineBaseResponse } from '../models/MagazineBaseResponse';
import type { MagazineFullResponse } from '../models/MagazineFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MagazineService {
    /**
     * Retrieval of a single magazine
     * @param uid Magazine unique ID
     * @returns MagazineFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMagazine(uid: string): CancelablePromise<MagazineFullResponse | Error>;
    /**
     * Pagination over magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MagazineBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMagazines(pageNumber?: number, pageSize?: number): CancelablePromise<MagazineBaseResponse | Error>;
    /**
     * Searching magazines
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MagazineBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMagazines(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<MagazineBaseResponse>;
}
