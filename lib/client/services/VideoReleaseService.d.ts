import type { Error } from '../models/Error';
import type { VideoReleaseBaseResponse } from '../models/VideoReleaseBaseResponse';
import type { VideoReleaseFullResponse } from '../models/VideoReleaseFullResponse';
import type { VideoReleaseV2BaseResponse } from '../models/VideoReleaseV2BaseResponse';
import type { VideoReleaseV2FullResponse } from '../models/VideoReleaseV2FullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class VideoReleaseService {
    /**
     * @deprecated
     * Retrieval of a single video release
     * @param uid Video release unique ID
     * @returns VideoReleaseFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetVideoRelease(uid: string): CancelablePromise<VideoReleaseFullResponse | Error>;
    /**
     * @deprecated
     * Pagination over video releases
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageVideoReleases(pageNumber?: number, pageSize?: number): CancelablePromise<VideoReleaseBaseResponse | Error>;
    /**
     * @deprecated
     * Searching video releases
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoReleaseBaseResponse OK
     * @throws ApiError
     */
    static v1SearchVideoReleases(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<VideoReleaseBaseResponse>;
    /**
     * Retrieval of a single video release (V2)
     * @param uid Video release unique ID
     * @returns VideoReleaseV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetVideoRelease(uid: string): CancelablePromise<VideoReleaseV2FullResponse | Error>;
    /**
     * Pagination over video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageVideoReleases(pageNumber?: number, pageSize?: number): CancelablePromise<VideoReleaseBaseResponse | Error>;
    /**
     * Searching video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoReleaseV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchVideoReleases(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<VideoReleaseV2BaseResponse>;
}
