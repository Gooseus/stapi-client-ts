import type { TradingCardDeckBase } from './TradingCardDeckBase';
import type { TradingCardSetBase } from './TradingCardSetBase';
/**
 * Full trading card, returned when queried using UID
 */
export type TradingCardFull = {
    /**
     * Trading card unique ID
     */
    uid: string;
    /**
     * Trading card name
     */
    name: string;
    tradingCardSet?: TradingCardSetBase;
    tradingCardDeck?: TradingCardDeckBase;
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
};
