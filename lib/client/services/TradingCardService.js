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
    static v1GetTradingCard(uid) {
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
    static v1PageTradingCards(pageNumber, pageSize) {
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
    static v1SearchTradingCards(pageNumber, pageSize, sort, formData) {
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
