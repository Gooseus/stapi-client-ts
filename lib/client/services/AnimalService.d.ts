import type { AnimalBaseResponse } from '../models/AnimalBaseResponse';
import type { AnimalFullResponse } from '../models/AnimalFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class AnimalService {
    /**
     * Retrieval of a single animal
     * @param uid Animal unique ID
     * @returns AnimalFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetAnimal(uid: string): CancelablePromise<AnimalFullResponse | Error>;
    /**
     * Pagination over animals
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns AnimalBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageAnimals(pageNumber?: number, pageSize?: number): CancelablePromise<AnimalBaseResponse | Error>;
    /**
     * Searching animals
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns AnimalBaseResponse OK
     * @throws ApiError
     */
    static v1SearchAnimals(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<AnimalBaseResponse>;
}
