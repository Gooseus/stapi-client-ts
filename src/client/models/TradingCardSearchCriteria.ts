/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequestSort } from './RequestSort';

/**
 * Animal search criteria
 */
export type TradingCardSearchCriteria = {
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
     * Trading card name
     */
    name?: string;
    /**
     * UID of trading card deck
     */
    tradingCardDeckUid?: string;
    /**
     * UID of trading card set
     */
    tradingCardSetUid?: string;
};

