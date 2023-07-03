/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TradingCardDeckBase } from './TradingCardDeckBase';

/**
 * Response object for trading card decks search
 */
export type TradingCardDeckBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of trading card decks matching given criteria
     */
    tradingCardDecks?: Array<TradingCardDeckBase>;
};

