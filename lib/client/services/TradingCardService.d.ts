import type { Error } from '../models/Error';
import type { TradingCardBaseResponse } from '../models/TradingCardBaseResponse';
import type { TradingCardFullResponse } from '../models/TradingCardFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TradingCardService {
    /**
     * Retrieval of a single trading card
     * @param uid Trading card unique ID
     * @returns TradingCardFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTradingCard(uid: string): CancelablePromise<TradingCardFullResponse | Error>;
    /**
     * Pagination over trading cards
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTradingCards(pageNumber?: number, pageSize?: number): CancelablePromise<TradingCardBaseResponse | Error>;
    /**
     * Searching trading cards
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTradingCards(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TradingCardBaseResponse>;
}
