/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ComicCollectionBaseResponse } from '../models/ComicCollectionBaseResponse';
import type { ComicCollectionFullResponse } from '../models/ComicCollectionFullResponse';
import type { ComicCollectionV2FullResponse } from '../models/ComicCollectionV2FullResponse';
import type { Error } from '../models/Error';

import type { CancelablePromise } from '../core/CancelablePromise';
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
    public static v1GetComicCollection(
        uid: string,
    ): CancelablePromise<ComicCollectionFullResponse | Error> {
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
    public static v1PageComicCollections(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<ComicCollectionBaseResponse | Error> {
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
    public static v1SearchComicCollections(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<ComicCollectionBaseResponse> {
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
    public static v2GetComicCollection(
        uid: string,
    ): CancelablePromise<ComicCollectionV2FullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/rest/comicCollection',
            query: {
                'uid': uid,
            },
        });
    }

}
