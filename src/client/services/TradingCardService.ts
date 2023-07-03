/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { TradingCardBaseResponse } from '../models/TradingCardBaseResponse';
import type { TradingCardFullResponse } from '../models/TradingCardFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TradingCardService {

    /**
     * Retrieval of a single trading card
     * @param uid Trading card unique ID
     * @returns TradingCardFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetTradingCard(
        uid: string,
    ): CancelablePromise<TradingCardFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCard',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over trading cards
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageTradingCards(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<TradingCardBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCard/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching trading cards
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchTradingCards(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<TradingCardBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/tradingCard/search',
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
