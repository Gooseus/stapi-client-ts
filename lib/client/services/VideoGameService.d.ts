import type { Error } from '../models/Error';
import type { VideoGameBaseResponse } from '../models/VideoGameBaseResponse';
import type { VideoGameFullResponse } from '../models/VideoGameFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VideoGameService {
    /**
     * Retrieval of a single video game
     * @param uid VideoGame unique ID
     * @returns VideoGameFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetVideoGame(uid: string): CancelablePromise<VideoGameFullResponse | Error>;
    /**
     * Pagination over video games
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoGameBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageVideoGames(pageNumber?: number, pageSize?: number): CancelablePromise<VideoGameBaseResponse | Error>;
    /**
     * Searching video games
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoGameBaseResponse OK
     * @throws ApiError
     */
    static v1SearchVideoGames(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<VideoGameBaseResponse>;
}
