import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ComicCollectionService {
    /**
     * @deprecated
     * Retrieval of a single comic collection
     * @param uid Comic collection unique ID
     * @returns ComicCollectionFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetComicCollection(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicCollection',
            query: {
                'uid': uid,
            },
        });
    }
    /**
     * Pagination over comic collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns ComicCollectionBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageComicCollections(pageNumber, pageSize) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/comicCollection/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * Searching comic collections
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns ComicCollectionBaseResponse OK
     * @throws ApiError
     */
    static v1SearchComicCollections(pageNumber, pageSize, sort, formData) {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/comicCollection/search',
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
     * Retrieval of a single comic collection (V2)
     * @param uid Comic collection unique ID
     * @returns ComicCollectionV2FullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v2GetComicCollection(uid) {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/comicCollection',
            query: {
                'uid': uid,
            },
        });
    }
}
