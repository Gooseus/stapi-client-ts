/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { TradingCardDeckBaseResponse } from '../models/TradingCardDeckBaseResponse';
import type { TradingCardDeckFullResponse } from '../models/TradingCardDeckFullResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TradingCardDeckService {

    /**
     * Retrieval of a single trading card deck
     * @param uid trading card deck unique ID
     * @returns TradingCardDeckFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1GetTradingCardDeck(
        uid: string,
    ): CancelablePromise<TradingCardDeckFullResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCardDeck',
            query: {
                'uid': uid,
            },
        });
    }

    /**
     * Pagination over trading card decks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardDeckBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    public static v1PageTradingCardDecks(
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<TradingCardDeckBaseResponse | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/rest/tradingCardDeck/search',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Searching trading card decks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardDeckBaseResponse OK
     * @throws ApiError
     */
    public static v1SearchTradingCardDecks(
        pageNumber?: number,
        pageSize?: number,
        sort?: string,
        formData?: any,
    ): CancelablePromise<TradingCardDeckBaseResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/rest/tradingCardDeck/search',
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
