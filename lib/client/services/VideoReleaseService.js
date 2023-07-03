import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VideoReleaseService {
    /**
     * @deprecated
     * Retrieval of a single video release
     * @param uid Video release unique ID
     * @returns VideoReleaseFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetVideoRelease(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoRelease',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * @deprecated
     * Pagination over video releases
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageVideoReleases(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
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
    static v1SearchVideoReleases(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
    /**
     * Retrieval of a single video release (V2)
     * @param uid Video release unique ID
     * @returns VideoReleaseV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetVideoRelease(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/videoRelease',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns VideoReleaseBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2PageVideoReleases(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching video releases (V2)
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns VideoReleaseV2BaseResponse OK
     * @throws ApiError
     */
    static v2SearchVideoReleases(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/rest/videoRelease/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'sort': sort,
            },
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
        });
    }
}
