import type { BookCollectionBaseResponse } from '../models/BookCollectionBaseResponse';
import type { BookCollectionFullResponse } from '../models/BookCollectionFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class BookCollectionService {
    /**
     * Retrieval of a single book collection
     * @param uid Book collection unique ID
     * @returns BookCollectionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetBookCollection(uid: string): CancelablePromise<BookCollectionFullResponse | Error>;
    /**
     * Pagination over book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns BookCollectionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageBookCollections(pageNumber?: number, pageSize?: number): CancelablePromise<BookCollectionBaseResponse | Error>;
    /**
     * Searching book collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns BookCollectionBaseResponse OK
     * @throws ApiError
     */
    static v1SearchBookCollections(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<BookCollectionBaseResponse>;
}
