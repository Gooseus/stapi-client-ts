/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TradingCardDeckHeader } from './TradingCardDeckHeader';
import type { TradingCardSetHeader } from './TradingCardSetHeader';

/**
 * Base trading card, returned in search results
 */
export type TradingCardBase = {
    /**
     * Trading card unique ID
     */
    uid: string;
    /**
     * Trading card name
     */
    name: string;
    /**
     * Trading card number
     */
    number?: string;
    /**
     * Release year, if set was releases over multiple years
     */
    releaseYear?: number;
    /**
     * Production run, if different from trading card set production run
     */
    productionRun?: number;
    tradingCardSet?: TradingCardSetHeader;
    tradingCardDeck?: TradingCardDeckHeader;
};

