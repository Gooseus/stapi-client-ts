/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TradingCardBase } from './TradingCardBase';
import type { TradingCardSetHeader } from './TradingCardSetHeader';

/**
 * Full trading card deck, returned when queried using UID
 */
export type TradingCardDeckFull = {
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
    /**
     * Trading cards in this deck
     */
    tradingCards?: Array<TradingCardBase>;
};

