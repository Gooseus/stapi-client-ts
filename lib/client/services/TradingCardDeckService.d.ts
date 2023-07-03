import type { Error } from '../models/Error';
import type { TradingCardDeckBaseResponse } from '../models/TradingCardDeckBaseResponse';
import type { TradingCardDeckFullResponse } from '../models/TradingCardDeckFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TradingCardDeckService {
    /**
     * Retrieval of a single trading card deck
     * @param uid trading card deck unique ID
     * @returns TradingCardDeckFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTradingCardDeck(uid: string): CancelablePromise<TradingCardDeckFullResponse | Error>;
    /**
     * Pagination over trading card decks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardDeckBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTradingCardDecks(pageNumber?: number, pageSize?: number): CancelablePromise<TradingCardDeckBaseResponse | Error>;
    /**
     * Searching trading card decks
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardDeckBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTradingCardDecks(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TradingCardDeckBaseResponse>;
}
