/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TradingCardSetHeader } from './TradingCardSetHeader';

/**
 * Base trading card deck, returned in search results
 */
export type TradingCardDeckBase = {
    /**
     * Trading card deck unique ID
     */
    uid: string;
    /**
     * Trading card deck name
     */
    name: string;
    /**
     * Frequency with which this deck occur in it's set
     */
    frequency?: string;
    tradingCardSet?: TradingCardSetHeader;
};

