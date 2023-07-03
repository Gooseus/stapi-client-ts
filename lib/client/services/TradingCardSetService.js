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
    static v1GetTradingCardSet(uid) {
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
    static v1PageTradingCardSets(pageNumber, pageSize) {
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
    static v1SearchTradingCardSets(pageNumber, pageSize, sort, formData) {
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
