/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ResponsePage } from './ResponsePage';
import type { ResponseSort } from './ResponseSort';
import type { TradingCardBase } from './TradingCardBase';

/**
 * Response object for trading cards search
 */
export type TradingCardBaseResponse = {
    page?: ResponsePage;
    sort?: ResponseSort;
    /**
     * List of trading cards matching given criteria
     */
    tradingCards?: Array<TradingCardBase>;
};

