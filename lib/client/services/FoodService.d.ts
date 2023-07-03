import type { Error } from '../models/Error';
import type { FoodBaseResponse } from '../models/FoodBaseResponse';
import type { FoodFullResponse } from '../models/FoodFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class FoodService {
    /**
     * Retrieval of a single food
     * @param uid Food unique ID
     * @returns FoodFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetFood(uid: string): CancelablePromise<FoodFullResponse | Error>;
    /**
     * Pagination over foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns FoodBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageFoods(pageNumber?: number, pageSize?: number): CancelablePromise<FoodBaseResponse | Error>;
    /**
     * Searching foods
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns FoodBaseResponse OK
     * @throws ApiError
     */
    static v1SearchFoods(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<FoodBaseResponse>;
}
