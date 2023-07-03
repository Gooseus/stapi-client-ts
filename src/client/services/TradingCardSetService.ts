/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { TradingCardSetBaseResponse } from '../models/TradingCardSetBaseResponse';
import type { TradingCardSetFullResponse } from '../models/TradingCardSetFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TradingCardSetService {

    /**
     * Retrieval of a single trading card set
     * @param uid Trading card set unique ID
     * @returns TradingCardSetFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetTradingCardSet(
        uid: string,
    ): CancelablePromise<TradingCardSetFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCardSet',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over trading card sets
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardSetBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageTradingCardSets(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<TradingCardSetBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCardSet/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching trading card sets
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardSetBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchTradingCardSets(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<TradingCardSetBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/tradingCardSet/search',
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
