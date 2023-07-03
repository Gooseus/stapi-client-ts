import type { EpisodeBaseResponse } from '../models/EpisodeBaseResponse';
import type { EpisodeFullResponse } from '../models/EpisodeFullResponse';
import type { Error } from '../models/Error';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class EpisodeService {
    /**
     * Retrieval of a single episode
     * @param uid Episode unique ID
     * @returns EpisodeFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetEpisode(uid: string): CancelablePromise<EpisodeFullResponse | Error>;
    /**
     * Pagination over episodes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns EpisodeBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageEpisodes(pageNumber?: number, pageSize?: number): CancelablePromise<EpisodeBaseResponse | Error>;
    /**
     * Searching episodes
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns EpisodeBaseResponse OK
     * @throws ApiError
     */
    static v1SearchEpisodes(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<EpisodeBaseResponse>;
}
