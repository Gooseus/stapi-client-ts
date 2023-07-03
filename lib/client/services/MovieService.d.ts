import type { Error } from '../models/Error';
import type { MovieBaseResponse } from '../models/MovieBaseResponse';
import type { MovieFullResponse } from '../models/MovieFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class MovieService {
    /**
     * Retrieval of a single movie
     * @param uid Movie unique ID
     * @returns MovieFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetMovie(uid: string): CancelablePromise<MovieFullResponse | Error>;
    /**
     * Pagination over movies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns MovieBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageMovies(pageNumber?: number, pageSize?: number): CancelablePromise<MovieBaseResponse | Error>;
    /**
     * Searching movies
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns MovieBaseResponse OK
     * @throws ApiError
     */
    static v1SearchMovies(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<MovieBaseResponse>;
}
