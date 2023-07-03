import type { Error } from '../models/Error';
import type { TradingCardSetBaseResponse } from '../models/TradingCardSetBaseResponse';
import type { TradingCardSetFullResponse } from '../models/TradingCardSetFullResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class TradingCardSetService {
    /**
     * Retrieval of a single trading card set
     * @param uid Trading card set unique ID
     * @returns TradingCardSetFullResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1GetTradingCardSet(uid: string): CancelablePromise<TradingCardSetFullResponse | Error>;
    /**
     * Pagination over trading card sets
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @returns TradingCardSetBaseResponse OK
     * @returns Error Unexpected error
     * @throws ApiError
     */
    static v1PageTradingCardSets(pageNumber?: number, pageSize?: number): CancelablePromise<TradingCardSetBaseResponse | Error>;
    /**
     * Searching trading card sets
     * @param pageNumber Zero-based page number
     * @param pageSize Page size
     * @param sort Sorting, serialized like this: fieldName,ASC;anotherFieldName,DESC
     * @param formData
     * @returns TradingCardSetBaseResponse OK
     * @throws ApiError
     */
    static v1SearchTradingCardSets(pageNumber?: number, pageSize?: number, sort?: string, formData?: any): CancelablePromise<TradingCardSetBaseResponse>;
}
