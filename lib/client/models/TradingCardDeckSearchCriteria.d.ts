import type { RequestSort } from './RequestSort';
/**
 * Trading card deck search criteria
 */
export type TradingCardDeckSearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Trading card deck name
     */
    name?: string;
    /**
     * UID of trading card set
     */
    tradingCardSetUid?: string;
};
